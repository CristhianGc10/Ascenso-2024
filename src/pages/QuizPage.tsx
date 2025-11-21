// src/pages/QuizPage.tsx

import type { OptionKey, Question } from '../data/questions';

import type { FlowId } from '../data/flows';
import FlowModal from '../components/FlowModal';
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
    onFinish: () => void; // se usa también en review
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

    // Estado para el esquema (React Flow)
    const [openFlowId, setOpenFlowId] = React.useState<FlowId | null>(null);

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
                    if (isLast) onFinish();
                    else setIdx((i) => Math.min(total - 1, i + 1));
                }}
                nextLabel={isLast ? 'Finalizar' : 'Siguiente'}
                enableLongPress={true}
                onLongPress={() => setShowQuickNav(true)}
                longPressMs={1500}
            />

            <QuestionCard
                q={q}
                stems={stemsMap}
                order={idx + 1}
                selected={answers[q.id] ?? null}
                onSelect={onSelect}
                // NUEVO: abrir esquema si la pregunta tiene flowId
                onOpenFlow={
                    q.flowId
                        ? () => setOpenFlowId(q.flowId as FlowId)
                        : undefined
                }
            />

            <QuickNavModal
                open={showQuickNav}
                onClose={() => setShowQuickNav(false)}
                currentIdx={idx}
                order={order}
                answers={answers}
                onGoTo={(target: number) => {
                    setIdx(() => target);
                    setShowQuickNav(false);
                }}
            />

            <FlowModal
                open={openFlowId !== null}
                onClose={() => setOpenFlowId(null)}
                flowId={openFlowId}
            />
        </div>
    );
}
