import React from 'react';

type Props = {
    meta: React.ReactNode;
    leftDisabled?: boolean;
    onPrev: () => void;
    onNext: () => void;
    nextLabel: string;
    /** Activa long-press en ambos botones (prev y next) */
    enableLongPress?: boolean;
    /** Acción al hacer long-press (abrir modal) */
    onLongPress?: () => void;
    /** Duración del long-press en ms (por defecto 1500ms) */
    longPressMs?: number;
};

export default function Pager({
    meta,
    leftDisabled,
    onPrev,
    onNext,
    nextLabel,
    enableLongPress,
    onLongPress,
    longPressMs = 1500,
}: Props) {
    // Timers y banderas separadas para cada botón
    const prevTimerRef = React.useRef<number | null>(null);
    const nextTimerRef = React.useRef<number | null>(null);
    const didLongPressPrevRef = React.useRef(false);
    const didLongPressNextRef = React.useRef(false);

    // coordenadas para detectar desplazamiento y cancelar long-press
    const prevStartRef = React.useRef<{ x: number; y: number } | null>(null);
    const nextStartRef = React.useRef<{ x: number; y: number } | null>(null);
    const MOVE_TOL = 10; // px

    const clearPrevLP = () => {
        if (prevTimerRef.current != null) {
            window.clearTimeout(prevTimerRef.current);
            prevTimerRef.current = null;
        }
    };
    const clearNextLP = () => {
        if (nextTimerRef.current != null) {
            window.clearTimeout(nextTimerRef.current);
            nextTimerRef.current = null;
        }
    };

    const onPrevDown = (x: number, y: number) => {
        if (!enableLongPress || !onLongPress || leftDisabled) return;
        clearPrevLP();
        didLongPressPrevRef.current = false;
        prevStartRef.current = { x, y };
        prevTimerRef.current = window.setTimeout(() => {
            didLongPressPrevRef.current = true;
            onLongPress();
        }, longPressMs);
    };
    const onNextDown = (x: number, y: number) => {
        if (!enableLongPress || !onLongPress) return;
        clearNextLP();
        didLongPressNextRef.current = false;
        nextStartRef.current = { x, y };
        nextTimerRef.current = window.setTimeout(() => {
            didLongPressNextRef.current = true;
            onLongPress();
        }, longPressMs);
    };

    const onPrevMove = (x: number, y: number) => {
        const s = prevStartRef.current;
        if (!s) return;
        if (Math.hypot(x - s.x, y - s.y) > MOVE_TOL) clearPrevLP();
    };
    const onNextMove = (x: number, y: number) => {
        const s = nextStartRef.current;
        if (!s) return;
        if (Math.hypot(x - s.x, y - s.y) > MOVE_TOL) clearNextLP();
    };

    const handleClickPrev: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        if (didLongPressPrevRef.current) {
            e.preventDefault();
            e.stopPropagation();
            didLongPressPrevRef.current = false;
            return;
        }
        onPrev();
    };

    const handleClickNext: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        if (didLongPressNextRef.current) {
            e.preventDefault();
            e.stopPropagation();
            didLongPressNextRef.current = false;
            return;
        }
        onNext();
    };

    return (
        <div className="pager">
            <div className="pager-inner">
                <button
                    className="btn"
                    onClick={handleClickPrev}
                    disabled={!!leftDisabled}
                    onMouseDown={(e) => onPrevDown(e.clientX, e.clientY)}
                    onMouseMove={(e) => onPrevMove(e.clientX, e.clientY)}
                    onMouseUp={clearPrevLP}
                    onMouseLeave={clearPrevLP}
                    onTouchStart={(e) => {
                        const t = e.touches[0];
                        onPrevDown(t.clientX, t.clientY);
                    }}
                    onTouchMove={(e) => {
                        const t = e.touches[0];
                        onPrevMove(t.clientX, t.clientY);
                    }}
                    onTouchEnd={clearPrevLP}
                    title={
                        enableLongPress
                            ? 'Mantén presionado 1.5s para ir a una pregunta específica'
                            : undefined
                    }
                >
                    Regresar
                </button>

                <div className="pager-meta">{meta}</div>

                <button
                    className="btn"
                    onClick={handleClickNext}
                    onMouseDown={(e) => onNextDown(e.clientX, e.clientY)}
                    onMouseMove={(e) => onNextMove(e.clientX, e.clientY)}
                    onMouseUp={clearNextLP}
                    onMouseLeave={clearNextLP}
                    onTouchStart={(e) => {
                        const t = e.touches[0];
                        onNextDown(t.clientX, t.clientY);
                    }}
                    onTouchMove={(e) => {
                        const t = e.touches[0];
                        onNextMove(t.clientX, t.clientY);
                    }}
                    onTouchEnd={clearNextLP}
                    title={
                        enableLongPress
                            ? 'Mantén presionado 1.5s para ir a una pregunta específica'
                            : undefined
                    }
                >
                    {nextLabel}
                </button>
            </div>
        </div>
    );
}
