import React from 'react';
import {
    nodeTypes,
    defaultEdgeOptions,
    connectionLineComponent,
} from '../flowkit';

import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    type Node,
    type Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

type Props = {
    open: boolean;
    onClose: () => void;
    title?: string;
    nodes?: Node[];
    edges?: Edge[];
};

const defaultNodes: Node[] = [
    {
        id: 'c',
        position: { x: 0, y: 0 },
        data: { label: 'Concepto' },
        type: 'input',
    },
    { id: 'a', position: { x: -150, y: 120 }, data: { label: 'Parte A' } },
    { id: 'b', position: { x: 150, y: 120 }, data: { label: 'Parte B' } },
    {
        id: 'res',
        position: { x: 0, y: 240 },
        data: { label: 'Resultado' },
        type: 'output',
    },
];

const defaultEdges: Edge[] = [
    { id: 'e1', source: 'c', target: 'a' },
    { id: 'e2', source: 'c', target: 'b' },
    { id: 'e3', source: 'a', target: 'res' },
    { id: 'e4', source: 'b', target: 'res' },
];

export default function FlowModal({
    open,
    onClose,
    title = 'Esquema',
    nodes = defaultNodes,
    edges = defaultEdges,
}: Props) {
    const [nf, , onN] = useNodesState(nodes);
    const [ef, , onE] = useEdgesState(edges);

    React.useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="flow-title"
            onClick={onClose}
            style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: 'min(920px, 92vw)',
                    height: 'min(620px, 80vh)',
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
                    <h2 id="flow-title" style={{ margin: 0, fontSize: 16 }}>
                        {title}
                    </h2>
                    <button
                        onClick={onClose}
                        aria-label="Cerrar"
                        style={{
                            border: '1px solid #e5e7eb',
                            background: 'white',
                            padding: '6px 10px',
                            borderRadius: 8,
                            cursor: 'pointer',
                        }}
                    >
                        Cerrar
                    </button>
                </header>

                <div style={{ flex: 1 }}>
                    <ReactFlow
                        nodes={nf}
                        edges={ef}
                        onNodesChange={onN}
                        onEdgesChange={onE}
                        nodeTypes={nodeTypes}
                        defaultEdgeOptions={defaultEdgeOptions}
                        connectionLineComponent={connectionLineComponent}
                        fitView
                    ></ReactFlow>
                </div>
            </div>
        </div>
    );
}
