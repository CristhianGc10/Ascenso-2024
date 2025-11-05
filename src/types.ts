export type Stage = 'cover' | 'quiz' | 'results' | 'history' | 'review';

export type AttemptRow = {
    id: string;
    started_at: string | null;
    completed_at: string | null;
    correct_count: number | null;
    score: number | null;
    order?: number[] | null;
};
