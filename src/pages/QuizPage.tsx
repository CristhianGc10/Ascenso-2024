import type { OptionKey, Question } from '../data/questions';

import Pager from '../components/Pager';
import QuestionCard from '../components/QuestionCard';
import QuickNavModal from '../components/QuickNavModal';
import React from 'react';
import { stemsMap } from '../data/stems';

type Props = {
    stage: 'quiz' | 'review';
    order: number[];
    idx: number;
    setIdx: (fn: (i: number) => number) => void;
    questions: Question[];
    answers: Record<number, OptionKey | null>;
    onSelect: (k: OptionKey) => void;
    onFinish: () => void; // ← se usará también en review
    showQuickNav: boolean;
    setShowQuickNav: (v: boolean) => void;
};

export default function QuizPage({
    stage,
    order,
    idx,
    setIdx,
    questions,
    answers,
    onSelect,
    onFinish,
    showQuickNav,
    setShowQuickNav,
}: Props) {
    const qid = order[idx];
    const q = questions.find((qq) => qq.id === qid)!;
    const total = order.length;

    React.useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') setIdx((i) => Math.max(0, i - 1));
            if (e.key === 'ArrowRight')
                setIdx((i) => Math.min(total - 1, i + 1));
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [setIdx, total]);

    React.useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [idx]);

    const isLast = idx === total - 1;

    return (
        <div className="container">
            <Pager
                meta={
                    (stage === 'review' ? 'Revisión' : 'Pregunta') +
                    ` ${idx + 1} de ${total}`
                }
                leftDisabled={idx === 0}
                onPrev={() => setIdx((i) => Math.max(0, i - 1))}
                onNext={() => {
                    if (isLast) onFinish(); // ← ahora también en review
                    else setIdx((i) => Math.min(total - 1, i + 1));
                }}
                nextLabel={isLast ? 'Finalizar' : 'Siguiente'} // ← uniforme en quiz y review
                enableLongPress={true} // long-press activo en ambos
                onLongPress={() => setShowQuickNav(true)}
                longPressMs={1500}
            />

            <QuestionCard
                q={q}
                stems={stemsMap}
                order={idx + 1}
                selected={answers[q.id] ?? null}
                onSelect={onSelect}
            />

            <QuickNavModal
                open={showQuickNav} // ← también en review
                onClose={() => setShowQuickNav(false)}
                currentIdx={idx}
                order={order}
                answers={answers}
                onGoTo={(target: number) => {
                    setIdx(() => target);
                    setShowQuickNav(false);
                }}
            />
        </div>
    );
}
