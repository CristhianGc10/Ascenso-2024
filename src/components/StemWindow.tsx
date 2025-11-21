// src/components/StemWindow.tsx

import React from 'react';

type Props = {
    title: string;
    content: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    width?: string | number;
    height?: number;
    maxHeight?: number;
};

export default function StemWindow({
    title,
    content,
    isOpen,
    onClose,
    width = 'min(900px, 95vw)',
    height = 600,
    maxHeight = 600,
}: Props) {
    if (!isOpen) return null;

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="stem-title"
            onClick={onClose}
            style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 900,
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()} // ← MUY IMPORTANTE: que el clic dentro NO cierre
                style={{
                    width,
                    maxHeight,
                    height,
                    background: '#fff',
                    borderRadius: 12,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                }}
            >
                <header
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 16px',
                        borderBottom: '1px solid #e5e7eb',
                    }}
                >
                    <h2
                        id="stem-title"
                        style={{ margin: 0, fontSize: 16, fontWeight: 600 }}
                    >
                        {title}
                    </h2>
                    <button
                        className="btn btn-ghost btn-small btn-icon"
                        onClick={onClose}
                        aria-label="Cerrar enunciado"
                        title="Cerrar enunciado"
                    >
                        ✕
                    </button>
                </header>

                <div
                    style={{
                        padding: '12px 16px',
                        overflowY: 'auto',
                    }}
                >
                    {content}
                </div>
            </div>
        </div>
    );
}
