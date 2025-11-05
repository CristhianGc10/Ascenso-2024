import type { OptionKey } from '../data/questions';
import { correctMap } from '../data/correct';

type Props = {
    order: number[];
    answers: Record<number, OptionKey | null>;
    onExit: () => void; // ← antes era onBackToCover
    onOpenHistory: () => void; // ← botón “Revisar” (historial)
};

export default function ResultsPage({
    order,
    answers,
    onExit,
    onOpenHistory,
}: Props) {
    const correctCount = order.reduce((acc, qid) => {
        const sel = answers[qid] ?? null;
        return acc + (sel === correctMap[qid] ? 1 : 0);
    }, 0);

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

            <div className="pager app-results-pager">
                <div className="pager-inner">
                    <button className="btn btn-ghost" onClick={onExit}>
                        Salir
                    </button>
                    <div />
                    <button className="btn" onClick={onOpenHistory}>
                        Revisar
                    </button>
                </div>
            </div>
        </div>
    );
}
