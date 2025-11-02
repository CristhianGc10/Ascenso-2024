import React from 'react';

type Props = {
    title: string;
    content: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
};

export default function StemWindow({ title, content, isOpen, onClose }: Props) {
    const [minimized, setMinimized] = React.useState(false);
    const [maximized, setMaximized] = React.useState(false);

    if (!isOpen && !minimized) return null;

    return (
        <>
            {isOpen && !minimized && (
                <div
                    className="stem-backdrop"
                    role="dialog"
                    aria-modal="true"
                    aria-label={title}
                >
                    <div
                        className={`stem-window ${
                            maximized ? 'maximized' : ''
                        }`}
                    >
                        <div className="stem-titlebar">
                            <div className="stem-title">{title}</div>
                            <div className="row">
                                {/* Minimizar — */}
                                <button
                                    className="btn btn-ghost btn-icon"
                                    onClick={() => setMinimized(true)}
                                    aria-label="Minimizar"
                                    title="Minimizar"
                                >
                                    —
                                </button>
                                {/* Maximizar ▢ */}
                                <button
                                    className="btn btn-ghost btn-icon"
                                    onClick={() => setMaximized((v) => !v)}
                                    aria-label={
                                        maximized
                                            ? 'Restaurar tamaño'
                                            : 'Maximizar'
                                    }
                                    title={
                                        maximized
                                            ? 'Restaurar tamaño'
                                            : 'Maximizar'
                                    }
                                >
                                    ▢
                                </button>
                                {/* Cerrar ✕ */}
                                <button
                                    className="btn btn-ghost btn-icon"
                                    onClick={onClose}
                                    aria-label="Cerrar"
                                    title="Cerrar"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                        <div className="stem-content">{content}</div>
                    </div>
                </div>
            )}

            {minimized && (
                <div
                    className={`stem-dock ${
                        minimized ? 'minimized-corner' : ''
                    }`}
                >
                    <div
                        className="stem-dock-item"
                        role="toolbar"
                        aria-label={`Enunciado minimizado: ${title}`}
                    >
                        {/* Título a la izquierda */}
                        <span className="meta">{title}</span>

                        {/* A la derecha: ▢ junto a ✕ */}
                        <button
                            className="btn btn-ghost btn-icon"
                            onClick={(e) => {
                                e.stopPropagation();
                                setMinimized(false);
                            }}
                            aria-label="Restaurar"
                            title="Restaurar"
                        >
                            ▢
                        </button>
                        <button
                            className="btn btn-ghost btn-icon"
                            onClick={(e) => {
                                e.stopPropagation();
                                setMinimized(false);
                                onClose();
                            }}
                            aria-label="Cerrar"
                            title="Cerrar"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
