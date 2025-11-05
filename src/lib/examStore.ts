// src/lib/examStore.ts

import type { OptionKey } from '../data/questions';
import { supabase } from './supabase';

export type AttemptId = string;

export type StartAttemptInput = {
    order: number[];
    examVersion?: string;
};

export async function startAttempt({ order, examVersion }: StartAttemptInput) {
    const {
        data: { user },
        error: uerr,
    } = await supabase.auth.getUser();
    if (uerr || !user) throw new Error('No autenticado');
    const { data, error } = await supabase
        .from('exam_attempts')
        .insert({ user_id: user.id, order, exam_version: examVersion ?? null })
        .select('id')
        .single();
    if (error) throw error;
    return data.id as AttemptId;
}

export async function saveAnswer(params: {
    attemptId: AttemptId;
    questionId: number;
    option: OptionKey;
    isCorrect?: boolean;
    timeSpentMs?: number;
}) {
    const { attemptId, questionId, option, isCorrect, timeSpentMs } = params;
    const { error } = await supabase.from('exam_answers').upsert({
        attempt_id: attemptId,
        question_id: questionId,
        option_selected: option,
        is_correct: typeof isCorrect === 'boolean' ? isCorrect : null,
        time_spent_ms: timeSpentMs ?? null,
    });
    if (error) throw error;
}

export async function finalizeAttempt(
    attemptId: AttemptId,
    correctCount: number,
    durationMs: number,
    scorePct: number
) {
    const { error } = await supabase
        .from('exam_attempts')
        .update({
            completed_at: new Date().toISOString(),
            duration_ms: durationMs,
            correct_count: correctCount,
            score: scorePct,
        })
        .eq('id', attemptId);
    if (error) throw error;
}

export type ListAttemptsRow = {
    id: string;
    started_at: string | null;
    completed_at: string | null;
    correct_count: number | null;
    score: number | null;
    order: number[] | null;
};

export async function listAttempts(): Promise<ListAttemptsRow[]> {
    const { data, error } = await supabase
        .from('exam_attempts')
        .select('id, started_at, completed_at, correct_count, score, order')
        .order('started_at', { ascending: false });
    if (error) throw error;
    return data as unknown as ListAttemptsRow[];
}

export async function loadAttempt(attemptId: AttemptId) {
    const attemptQ = supabase
        .from('exam_attempts')
        .select('id, started_at, completed_at, correct_count, score, order')
        .eq('id', attemptId)
        .single();

    const answersQ = supabase
        .from('exam_answers')
        .select(
            'question_id, option_selected, is_correct, time_spent_ms, change_count'
        )
        .eq('attempt_id', attemptId)
        .order('question_id', { ascending: true });

    const [attempt, answers] = await Promise.all([attemptQ, answersQ]);
    if (attempt.error) throw attempt.error;
    if (answers.error) throw answers.error;

    return {
        attempt: attempt.data,
        answers: answers.data as Array<{
            question_id: number;
            option_selected: OptionKey;
            is_correct: boolean | null;
            time_spent_ms: number | null;
            change_count: number | null;
        }>,
    };
}
