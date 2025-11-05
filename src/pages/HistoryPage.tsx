import type { AttemptRow } from '../types';

type Props = {
    attempts: AttemptRow[];
    onBack: () => void;
    onNewAttempt: () => void;
    onOpenAttempt: (id: string) => void;
};

export default function HistoryPage({
    attempts,
    onBack,
    onNewAttempt,
    onOpenAttempt,
}: Props) {
    return (
        <div className="container">
            <div className="card">
                <h2 className="h1">Registro</h2>
                <div className="app-table-wrapper">
                    <table className="app-results-table">
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Estado</th>
                                <th>Puntaje</th>
                                {/* ← ahora es número de correctas */}
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attempts.map((a) => {
                                const date = a.started_at
                                    ? new Date(a.started_at)
                                    : null;
                                const fecha = date
                                    ? date.toLocaleString()
                                    : '—';
                                const estado = a.completed_at
                                    ? 'Finalizado'
                                    : 'En curso';
                                const puntaje = a.correct_count ?? '—';
                                return (
                                    <tr key={a.id}>
                                        <td>{fecha}</td>
                                        <td>{estado}</td>
                                        <td>{puntaje}</td>
                                        <td>
                                            <button
                                                className="btn btn-small"
                                                onClick={() =>
                                                    onOpenAttempt(a.id)
                                                }
                                            >
                                                Revisar
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                            {attempts.length === 0 && (
                                <tr>
                                    <td
                                        colSpan={4}
                                        style={{ textAlign: 'center' }}
                                    >
                                        Sin intentos aún
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="pager">
                <div className="pager-inner">
                    <button className="btn btn-ghost" onClick={onBack}>
                        Volver
                    </button>
                    <div />
                    <button className="btn" onClick={onNewAttempt}>
                        Nuevo intento
                    </button>
                </div>
            </div>
        </div>
    );
}
