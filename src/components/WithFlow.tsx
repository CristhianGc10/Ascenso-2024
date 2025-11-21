// src/components/WithFlow.tsx

import type { Edge, Node } from '@xyflow/react';

import type { FlowId } from '../data/flows';
import FlowModal from './FlowModal';
import React from 'react';

type Props = {
    children: React.ReactNode;
    flowId: FlowId | null; // ✅ Cambiar de flowTitle a flowId
    nodes?: Node[];
    edges?: Edge[];
    buttonLabel?: string;
};

export default function WithFlow({
    children,
    flowId, // ✅ Cambiar
    buttonLabel = 'Esquema',
}: Props) {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            {children}
            <button
                onClick={() => setOpen(true)}
                aria-label="Abrir esquema"
                style={{
                    position: 'fixed',
                    right: 16,
                    bottom: 16,
                    height: 48,
                    padding: '0 16px',
                    borderRadius: 999,
                    border: '1px solid #e5e7eb',
                    background: 'white',
                    cursor: 'pointer',
                    boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
                    fontWeight: 600,
                    zIndex: 1000,
                }}
            >
                {buttonLabel}
            </button>

            <FlowModal
                open={open}
                onClose={() => setOpen(false)}
                flowId={flowId} // ✅ Pasar flowId
            />
        </>
    );
}
