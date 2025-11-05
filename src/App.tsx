// src/App.tsx
import './App.css';

import {
    finalizeAttempt,
    listAttempts,
    loadAttempt,
    saveAnswer,
    startAttempt,
} from './lib/examStore';

import AuthModal from './components/AuthModal';
import CoverPage from './pages/CoverPage';
import HistoryPage from './pages/HistoryPage';
import type { OptionKey } from './data/questions';
import QuizPage from './pages/QuizPage';
import React from 'react';
import ResultsPage from './pages/ResultsPage';
import type { Session } from '@supabase/supabase-js';
import { correctMap } from './data/correct';
import { questions } from './data/questions';
import { supabase } from './lib/supabase';

type Stage = 'cover' | 'quiz' | 'results' | 'history' | 'review';

type AttemptRow = {
    id: string;
    started_at: string | null;
    completed_at: string | null;
    correct_count: number | null;
    score: number | null;
    order?: number[] | null;
};

const TIMER_MS = 100_000; // 1 min 40 s por pregunta (invisible)

export default function App() {
    const [stage, setStage] = React.useState<Stage>('cover');
    const [session, setSession] = React.useState<Session | null>(null);

    const [attemptId, setAttemptId] = React.useState<string | null>(null);
    const [readOnly, setReadOnly] = React.useState(false);

    const [order, setOrder] = React.useState<number[]>(
        questions.map((q) => q.id)
    );
    const [idx, setIdx] = React.useState(0);
    const total = order.length;

    const [answers, setAnswers] = React.useState<
        Record<number, OptionKey | null>
    >({});
    const [timedOut, setTimedOut] = React.useState<Record<number, boolean>>({});
    const [showQuickNav, setShowQuickNav] = React.useState(false);

    const [attempts, setAttempts] = React.useState<AttemptRow[]>([]);
    const [startedAt, setStartedAt] = React.useState<number | null>(null);
    const timerRef = React.useRef<number | null>(null);

    const [showAuth, setShowAuth] = React.useState(false);

    // Nombre mostrado (solo se muestra si hay sesión)
    const [displayName, setDisplayName] = React.useState<string>('');

    // Cargar sesión y nombre inicial
    React.useEffect(() => {
        // Al cargar: trae sesión y (opcional) nombre guardado por la app
        (async () => {
            const { data } = await supabase.auth.getSession();
            setSession(data.session ?? null);

            // NO leemos user_metadata de Google; solo tu nombre si lo guardaste tú
            const cached = localStorage.getItem('app.displayName') || '';
            setDisplayName(cached);
        })();

        // Suscríbete a cambios de auth, pero sin borrar el nombre salvo SIGNED_OUT
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, s) => {
            setSession(s);

            if (event === 'SIGNED_IN') {
                setShowAuth(false);
                // Importante: NO tocar displayName aquí
            }

            if (event === 'SIGNED_OUT' || !s) {
                // Solo al cerrar sesión limpiamos el nombre
                localStorage.removeItem('app.displayName');
                setDisplayName('');
            }

            // Para otros eventos (TOKEN_REFRESHED, USER_UPDATED, etc.) no hacemos nada con displayName
        });

        return () => subscription.unsubscribe();
    }, []);

    // Guardar/actualizar nombre (local + metadata si hay sesión)
    async function handleSetDisplayName(name: string) {
        setDisplayName(name);
        localStorage.setItem('app.displayName', name);
        if (session) {
            try {
                await supabase.auth.updateUser({ data: { full_name: name } });
            } catch {
                // noop
            }
        }
    }

    // Cerrar sesión
    async function handleSignOut() {
        try {
            await supabase.auth.signOut();
        } catch {}
        localStorage.removeItem('app.displayName');
        setDisplayName('');
        setIdx(0);
        setStage('cover');
        setAnswers({});
        setTimedOut({});
        setAttemptId(null);
        setReadOnly(false);
    }

    // Iniciar examen (gating: requiere sesión + nombre)
    async function handleStartExam() {
        const isSignedIn = !!session;
        const canStart = isSignedIn && !!(displayName && displayName.trim());

        if (!canStart) {
            if (!isSignedIn) setShowAuth(true);
            return;
        }

        const id = await startAttempt({ order });
        setAttemptId(id);
        setAnswers({});
        setTimedOut({});
        setIdx(0);
        setReadOnly(false);
        setStartedAt(Date.now());
        setStage('quiz');
    }

    // Seleccionar respuesta
    const onSelect = async (k: OptionKey) => {
        if (readOnly) return;
        const qid = order[idx];
        if (timedOut[qid]) return;

        setAnswers((prev) => ({ ...prev, [qid]: k }));

        if (attemptId) {
            const isCorrect = correctMap[qid] === k;
            await saveAnswer({
                attemptId,
                questionId: qid,
                option: k,
                isCorrect,
            });
        }
        clearTimer();
    };

    // Finalizar examen (guarda conteo de correctas como score)
    async function handleFinishExam() {
        if (stage !== 'quiz') return;
        const duration = startedAt ? Date.now() - startedAt : 0;

        let correctCount = 0;
        for (const qid of order) {
            const sel = answers[qid];
            if (sel && correctMap[qid] === sel) correctCount++;
        }

        const rawScore = correctCount; // usamos número de correctas como score
        if (attemptId) {
            await finalizeAttempt(attemptId, correctCount, duration, rawScore);
        }
        setStage('results');
    }

    // Abrir historial y cargar
    async function openHistory() {
        setStage('history');
    }
    React.useEffect(() => {
        if (stage !== 'history') return;
        (async () => {
            const rows = await listAttempts();
            setAttempts(rows as AttemptRow[]);
        })();
    }, [stage]);

    // Abrir intento guardado en modo revisión (readOnly)
    async function openAttempt(id: string) {
        const { attempt, answers: ans } = await loadAttempt(id);

        if (Array.isArray(attempt.order)) setOrder(attempt.order as number[]);
        else setOrder(questions.map((q) => q.id));

        const map: Record<number, OptionKey | null> = {};
        for (const a of ans)
            map[a.question_id] = a.option_selected as OptionKey;
        setAnswers(map);

        setAttemptId(null);
        setTimedOut({});
        setIdx(0);
        setReadOnly(true);
        setStage('review');
    }

    // Timer invisible por pregunta
    const clearTimer = () => {
        if (timerRef.current !== null) {
            window.clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };
    React.useEffect(() => {
        clearTimer();
        if (stage !== 'quiz') return;

        const qid = order[idx];
        const alreadyTimedOut = !!timedOut[qid];
        const hasAnswer = answers[qid] != null;

        const idxAtStart = idx;
        const qidAtStart = qid;

        if (!alreadyTimedOut && !hasAnswer && !readOnly) {
            timerRef.current = window.setTimeout(() => {
                setTimedOut((prev) => ({ ...prev, [qidAtStart]: true }));

                setAnswers((prev) => {
                    const stillNoAnswer = prev[qidAtStart] == null;
                    if (stillNoAnswer) {
                        setIdx((i) => {
                            if (i !== idxAtStart) return i;
                            if (i === total - 1) {
                                setStage('results');
                                return i;
                            }
                            return i + 1;
                        });
                    }
                    return prev;
                });
            }, TIMER_MS);
        }

        return clearTimer;
    }, [stage, idx, order, answers, readOnly, timedOut, total]);

    // --------- RENDERS POR STAGE ---------

    // Portada
    if (stage === 'cover') {
        const isSignedIn = !!session;
        const canStart = isSignedIn && !!(displayName && displayName.trim());

        return (
            <>
                <CoverPage
                    isSignedIn={isSignedIn}
                    displayName={isSignedIn ? displayName || null : null} // no mostrar nombre sin sesión
                    canStart={canStart}
                    onOpenLogin={() => setShowAuth(true)}
                    onSignOut={handleSignOut}
                    onStart={handleStartExam}
                    onOpenHistory={openHistory}
                    onSetName={handleSetDisplayName} // guarda nombre desde la portada
                />
                <AuthModal open={showAuth} onClose={() => setShowAuth(false)} />
            </>
        );
    }

    // Historial
    if (stage === 'history') {
        return (
            <>
                <HistoryPage
                    attempts={attempts}
                    onBack={() => setStage('cover')}
                    onNewAttempt={handleStartExam}
                    onOpenAttempt={openAttempt}
                />
                <AuthModal open={showAuth} onClose={() => setShowAuth(false)} />
            </>
        );
    }

    // Resultados
    if (stage === 'results') {
        return (
            <>
                <ResultsPage
                    order={order}
                    answers={answers}
                    onExit={() => {
                        setIdx(0);
                        setStage('cover');
                        setAnswers({});
                        setTimedOut({});
                        setAttemptId(null);
                        setReadOnly(false);
                    }}
                    onOpenHistory={() => setStage('history')}
                />
                <AuthModal open={showAuth} onClose={() => setShowAuth(false)} />
            </>
        );
    }

    // Quiz o Review
    return (
        <>
            <QuizPage
                stage={stage === 'review' ? 'review' : 'quiz'}
                order={order}
                idx={idx}
                setIdx={(fn) => setIdx(fn)}
                questions={questions}
                answers={answers}
                onSelect={onSelect}
                onFinish={
                    stage === 'review'
                        ? () => setStage('results')
                        : handleFinishExam
                }
                showQuickNav={showQuickNav}
                setShowQuickNav={setShowQuickNav}
            />
            <AuthModal open={showAuth} onClose={() => setShowAuth(false)} />
        </>
    );
}
