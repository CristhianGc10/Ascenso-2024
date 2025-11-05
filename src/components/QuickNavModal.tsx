import type { OptionKey } from '../data/questions';
import React from 'react';

type Props = {
    open: boolean;
    onClose: () => void;
    currentIdx: number;
    order: number[];
    answers: Record<number, OptionKey | null>;
    onGoTo: (idx: number) => void;
};

export default function QuickNavModal({
    open,
    onClose,
    currentIdx,
    order,
    answers,
    onGoTo,
}: Props) {
    const cardRef = React.useRef<HTMLDivElement | null>(null);
    const contentRef = React.useRef<HTMLDivElement | null>(null);

    const [cols, setCols] = React.useState(10);
    const [btnSize, setBtnSize] = React.useState(48);

    React.useEffect(() => {
        if (!open) return;

        function layout() {
            if (!contentRef.current) return;

            const availW = contentRef.current.clientWidth;
            const availH = contentRef.current.clientHeight;

            const N = order.length; // 60
            const GAP = 8;

            let bestCols = 1;
            let bestSize = 0;

            const maxCols = Math.min(15, N);
            for (let c = 3; c <= maxCols; c++) {
                const rows = Math.ceil(N / c);
                // tamaño máximo que cabe por ancho/alto, restando gaps
                const sW = Math.floor((availW - GAP * (c - 1)) / c);
                const sH = Math.floor((availH - GAP * (rows - 1)) / rows);
                const s = Math.min(sW, sH);
                if (s > bestSize) {
                    bestSize = s;
                    bestCols = c;
                }
            }

            // límite mínimo de tamaño para no “desaparecer” en pantallas chicas
            const finalSize = Math.max(24, bestSize);

            setCols(bestCols);
            setBtnSize(finalSize);
        }

        layout();
        window.addEventListener('resize', layout);
        const ro = new ResizeObserver(layout);
        if (contentRef.current) ro.observe(contentRef.current);

        return () => {
            window.removeEventListener('resize', layout);
            ro.disconnect();
        };
    }, [open, order.length]);

    if (!open) return null;

    // Tamaño de fuente relativo al botón
    const fontPx = Math.max(14, Math.floor(btnSize * 0.36));

    return (
        <div className="app-modal-overlay" onClick={onClose}>
            <div
                ref={cardRef}
                className="app-modal-card"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label="Ir a pregunta"
                // El modal no hace scroll; su contenido se ajusta
                style={{
                    width: 'min(900px, 95vw)',
                    height: 'min(620px, 85vh)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden', // sin scroll en el card
                }}
            >
                {/* Cabecera con título y ✕ */}
                <div
                    className="row"
                    style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 8,
                        flex: '0 0 auto',
                    }}
                >
                    <h2 className="h1 app-modal-title" style={{ margin: 0 }}>
                        Ir a pregunta
                    </h2>
                    <button
                        className="btn btn-ghost btn-icon"
                        onClick={onClose}
                        aria-label="Cerrar"
                        title="Cerrar"
                        style={{
                            fontSize: 22,
                            width: 36,
                            height: 36,
                            lineHeight: 1,
                        }}
                    >
                        ✕
                    </button>
                </div>

                {/* Contenido calculado para encajar sin scroll */}
                <div
                    ref={contentRef}
                    style={{
                        flex: '1 1 auto',
                        // La grilla se centra y no scrollea
                        display: 'grid',
                        gridTemplateColumns: `repeat(${cols}, ${btnSize}px)`,
                        gridAutoRows: `${btnSize}px`,
                        gap: 8,
                        justifyContent: 'center',
                        alignContent: 'center',
                        overflow: 'hidden', // clave: sin scroll
                    }}
                >
                    {order.map((_, qIdx) => (
                        <button
                            key={qIdx}
                            onClick={() => onGoTo(qIdx)}
                            className={`btn app-question-btn ${
                                qIdx === currentIdx ? 'active' : ''
                            } ${
                                answers[order[qIdx]] != null ? 'answered' : ''
                            }`}
                            title={
                                answers[order[qIdx]] != null
                                    ? 'Respondida'
                                    : 'Sin responder'
                            }
                            style={{
                                width: btnSize,
                                height: btnSize,
                                padding: 0,
                                borderRadius: Math.max(
                                    8,
                                    Math.round(btnSize * 0.18)
                                ),
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: fontPx,
                                lineHeight: 1,
                            }}
                        >
                            {qIdx + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
