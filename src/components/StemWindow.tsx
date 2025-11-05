import React from 'react';

type Size = number | string;

type Props = {
    title: string;
    content: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    width?: Size;
    height?: Size;
    maxWidth?: Size;
    maxHeight?: Size;
};

export default function StemWindow({
    title,
    content,
    isOpen,
    onClose,
    width,
    height,
    maxWidth,
    maxHeight,
}: Props) {
    React.useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="stem-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label={title}
            onClick={onClose}
        >
            <div
                className="stem-window"
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: width ?? 'min(800px, 92vw)',
                    height,
                    maxWidth,
                    maxHeight,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div className="stem-titlebar">
                    <div className="stem-title">{title}</div>
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

                <div
                    className="stem-content"
                    style={{ overflow: 'auto', flex: 1, minHeight: 0 }}
                >
                    {content}
                </div>
            </div>
        </div>
    );
}
