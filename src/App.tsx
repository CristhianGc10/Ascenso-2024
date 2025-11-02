import './App.css';

import type { OptionKey } from './data/questions';
import QuestionCard from './components/QuestionCard';
import React from 'react';
import { correctMap } from './data/correct';
import { questions } from './data/questions';
import { stemsMap } from './data/stems';

type Stage = 'cover' | 'quiz' | 'results';

const TIMER_MS = 100_000; // 1 min 40 s por pregunta (invisible)
const LONG_PRESS_MS = 3000; // 3 segundos para activar menú

export default function App() {
    const [stage, setStage] = React.useState<Stage>('cover');

    const [idx, setIdx] = React.useState(0);
    const total = questions.length;
    const q = questions[idx];

    // respuestas por id de pregunta
    const [answers, setAnswers] = React.useState<
        Record<number, OptionKey | null>
    >({});

    // preguntas que se pasaron de tiempo (true si ya venció)
    const [timedOut, setTimedOut] = React.useState<Record<number, boolean>>({});

    // Estado para el menú de navegación rápida
    const [showQuickNav, setShowQuickNav] = React.useState(false);
    const [searchInput, setSearchInput] = React.useState('');

    // timer invisible
    const timerRef = React.useRef<number | null>(null);
    const longPressRef = React.useRef<number | null>(null);

    const clearTimer = () => {
        if (timerRef.current !== null) {
            window.clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };

    const clearLongPress = () => {
        if (longPressRef.current !== null) {
            window.clearTimeout(longPressRef.current);
            longPressRef.current = null;
        }
    };

    // Inicia/reinicia cronómetro invisible para la pregunta actual.
    React.useEffect(() => {
        clearTimer();
        if (stage !== 'quiz') return;

        const alreadyTimedOut = !!timedOut[q.id];
        const hasAnswer = answers[q.id] != null;

        const idxAtStart = idx;
        const qidAtStart = q.id;

        if (!alreadyTimedOut && !hasAnswer) {
            timerRef.current = window.setTimeout(() => {
                setTimedOut((prev) => ({ ...prev, [qidAtStart]: true }));

                setAnswers((prev) => {
                    const stillNoAnswer = prev[qidAtStart] == null;
                    if (stillNoAnswer) {
                        setIdx((i) => {
                            if (i !== idxAtStart) return i;
                            if (i === questions.length - 1) {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stage, idx, q.id]);

    const goPrev = () => {
        setIdx((i) => {
            const newIdx = Math.max(0, i - 1);
            setTimedOut((prev) => ({ ...prev, [questions[newIdx].id]: false }));
            return newIdx;
        });
    };

    const goNext = () => {
        if (idx === total - 1) {
            setStage('results');
        } else {
            setIdx((i) => Math.min(total - 1, i + 1));
        }
    };

    const goToQuestion = (qIdx: number) => {
        setIdx(qIdx);
        setShowQuickNav(false);
        setSearchInput('');
        clearLongPress();
    };

    const onSelect = (k: OptionKey) => {
        if (timedOut[q.id]) return;
        setAnswers((prev: Record<number, OptionKey | null>) => ({
            ...prev,
            [q.id]: k,
        }));
        clearTimer();
    };

    // Manejo de long press en el botón siguiente
    const handleNextMouseDown = () => {
        longPressRef.current = window.setTimeout(() => {
            setShowQuickNav(true);
        }, LONG_PRESS_MS);
    };

    const handleNextMouseUp = () => {
        clearLongPress();
    };

    const handleNextTouchStart = () => {
        longPressRef.current = window.setTimeout(() => {
            setShowQuickNav(true);
        }, LONG_PRESS_MS);
    };

    const handleNextTouchEnd = () => {
        clearLongPress();
    };

    React.useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (stage !== 'quiz') return;
            if (e.key === 'ArrowLeft') goPrev();
            if (e.key === 'ArrowRight') goNext();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [stage, total, idx]);

    React.useEffect(() => {
        if (stage === 'quiz') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [idx, stage]);

    // Cerrar menú si se presiona Escape
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setShowQuickNav(false);
        };
        if (showQuickNav) {
            window.addEventListener('keydown', handleKeyDown);
            return () => window.removeEventListener('keydown', handleKeyDown);
        }
    }, [showQuickNav]);

    // ------- PORTADA -------
    if (stage === 'cover') {
        return (
            <div
                className="app-cover"
                tabIndex={0}
                onClick={() => setStage('quiz')}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setStage('quiz');
                }}
                aria-label="Portada - haga click para comenzar"
                title="Haga click para comenzar"
            >
                <div className="app-cover-inner">
                    <h1 className="app-cover-title">
                        Concurso Ascenso Educación Básica - 2024
                    </h1>
                </div>
            </div>
        );
    }

    // ------- RESULTADOS -------
    if (stage === 'results') {
        const rows = questions.map((qq) => {
            const sel = answers[qq.id] ?? null;
            const correct = correctMap[qq.id];
            const isCorrect = sel === correct;
            return { id: qq.id, sel, isCorrect };
        });

        const correctCount = rows.reduce(
            (acc, r) => acc + (r.isCorrect ? 1 : 0),
            0
        );

        const scoreColor =
            correctCount < 38
                ? 'app-score-low'
                : correctCount >= 45
                ? 'app-score-high'
                : 'app-score-medium';

        return (
            <div className="container">
                <div className="card">
                    <h2 className="h1 app-score-title">Puntaje</h2>
                    <div className={`app-score-display ${scoreColor}`}>
                        {correctCount}
                    </div>
                </div>

                <div className="card app-results-card">
                    <h2 className="h1 app-answers-title">Respuestas</h2>
                    <div className="app-table-wrapper">
                        <table className="app-results-table">
                            <thead>
                                <tr>
                                    <th>P.</th>
                                    <th>R.</th>
                                    <th>P.</th>
                                    <th>R.</th>
                                    <th>P.</th>
                                    <th>R.</th>
                                    <th>P.</th>
                                    <th>R.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({
                                    length: Math.ceil(rows.length / 4),
                                }).map((_, rowIdx) => (
                                    <tr key={rowIdx}>
                                        {[0, 1, 2, 3].map((colIdx) => {
                                            const itemIdx = rowIdx * 4 + colIdx;
                                            const r = rows[itemIdx];
                                            return (
                                                <React.Fragment key={colIdx}>
                                                    <td className="app-results-qnum">
                                                        {r ? r.id : ''}
                                                    </td>
                                                    <td
                                                        className={`app-results-answer ${
                                                            r
                                                                ? r.isCorrect
                                                                    ? 'correct'
                                                                    : 'incorrect'
                                                                : ''
                                                        }`}
                                                    >
                                                        {r ? r.sel ?? '—' : ''}
                                                    </td>
                                                </React.Fragment>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="pager app-results-pager">
                    <div className="pager-inner">
                        <button
                            className="btn btn-ghost"
                            onClick={() => {
                                setIdx(0);
                                setStage('cover');
                                setAnswers({});
                                setTimedOut({});
                            }}
                        >
                            Volver a portada
                        </button>
                        <div />
                        <button
                            className="btn"
                            onClick={() => {
                                setIdx(0);
                                setStage('quiz');
                            }}
                        >
                            Revisar desde la 1
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Preguntas filtradas por búsqueda
    const filteredQuestions = searchInput.trim()
        ? Array.from({ length: total }, (_, i) => i).filter(
              (qIdx) =>
                  String(qIdx + 1).includes(searchInput) ||
                  String(questions[qIdx].id).includes(searchInput)
          )
        : Array.from({ length: total }, (_, i) => i);

    // ------- QUIZ -------
    return (
        <div className="container">
            <div className="pager">
                <div className="pager-inner">
                    <button
                        className="btn"
                        onClick={goPrev}
                        disabled={idx === 0}
                    >
                        Regresar
                    </button>
                    <div className="pager-meta">
                        Pregunta {idx + 1} de {total}
                    </div>
                    <button
                        className="btn"
                        onClick={goNext}
                        onMouseDown={handleNextMouseDown}
                        onMouseUp={handleNextMouseUp}
                        onMouseLeave={handleNextMouseUp}
                        onTouchStart={handleNextTouchStart}
                        onTouchEnd={handleNextTouchEnd}
                        title="Mantén presionado 3 segundos para ir a una pregunta específica"
                    >
                        {idx === total - 1 ? 'Finalizar' : 'Siguiente'}
                    </button>
                </div>
            </div>

            <QuestionCard
                q={q}
                stems={stemsMap}
                order={idx + 1}
                selected={answers[q.id] ?? null}
                onSelect={onSelect}
            />

            {/* Modal de navegación rápida */}
            {showQuickNav && (
                <div
                    className="app-modal-overlay"
                    onClick={() => setShowQuickNav(false)}
                >
                    <div
                        className="app-modal-card"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="h1 app-modal-title">Ir a pregunta</h2>

                        <div className="app-question-grid">
                            {filteredQuestions.map((qIdx) => (
                                <button
                                    key={qIdx}
                                    onClick={() => goToQuestion(qIdx)}
                                    className={`btn app-question-btn ${
                                        qIdx === idx ? 'active' : ''
                                    } ${
                                        answers[questions[qIdx].id] != null
                                            ? 'answered'
                                            : ''
                                    }`}
                                    title={
                                        answers[questions[qIdx].id] != null
                                            ? 'Respondida'
                                            : 'Sin responder'
                                    }
                                >
                                    {qIdx + 1}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setShowQuickNav(false)}
                            className="btn btn-ghost"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
