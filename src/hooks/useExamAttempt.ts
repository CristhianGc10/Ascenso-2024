import * as React from 'react';
import type { OptionKey, Question } from '../data/questions';
import {
    startAttempt,
    saveAnswer,
    finalizeAttempt,
    loadAttempt,
    type AttemptId,
} from '../lib/examStore';

type Params = {
    questions: Question[];
    correctMap: Record<number, OptionKey>; // from data/correct.ts
    initialOrder?: number[]; // usa tu orden actual si ya lo barajas
};

export function useExamAttempt({
    questions,
    correctMap,
    initialOrder,
}: Params) {
    const [attemptId, setAttemptId] = React.useState<AttemptId | null>(null);
    const [order, setOrder] = React.useState<number[]>(
        initialOrder ?? questions.map((q) => q.id)
    );
    const [selectedById, setSelectedById] = React.useState<
        Record<number, OptionKey | null>
    >({});

    // arranca intento
    const begin = React.useCallback(async () => {
        const id = await startAttempt({ order });
        setAttemptId(id);
        return id;
    }, [order]);

    // seleccionar y persistir
    const onSelect = React.useCallback(
        async (qid: number, opt: OptionKey) => {
            setSelectedById((prev) => ({ ...prev, [qid]: opt }));
            if (!attemptId) return;
            const isCorrect = correctMap[qid]
                ? correctMap[qid] === opt
                : undefined;
            await saveAnswer({
                attemptId,
                questionId: qid,
                option: opt,
                isCorrect,
            });
        },
        [attemptId, correctMap]
    );

    // finalizar
    const finish = React.useCallback(
        async (durationMs: number) => {
            if (!attemptId) return;
            let correctCount = 0;
            for (const q of questions) {
                const sel = selectedById[q.id];
                if (sel && correctMap[q.id] === sel) correctCount++;
            }
            const scorePct = Number(
                ((correctCount / questions.length) * 100).toFixed(2)
            );
            await finalizeAttempt(
                attemptId,
                correctCount,
                durationMs,
                scorePct
            );
            return { correctCount, scorePct };
        },
        [attemptId, selectedById, questions, correctMap]
    );

    // cargar intento previo para modo revisión
    const load = React.useCallback(
        async (id: AttemptId) => {
            const { attempt, answers } = await loadAttempt(id);
            setAttemptId(id);
            setOrder(Array.isArray(attempt.order) ? attempt.order : order);
            const map: Record<number, OptionKey> = {};
            for (const a of answers) map[a.question_id] = a.option_selected;
            setSelectedById(map);
            return { attempt, answers };
        },
        [order]
    );

    return { attemptId, order, selectedById, begin, onSelect, finish, load };
}
