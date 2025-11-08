// src/components/FlowModal.tsx
import React from 'react';
import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    type Node as RFNode,
    type Edge as RFEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import {
    nodeTypes,
    defaultEdgeOptions,
    connectionLineComponent,
} from '../flowkit';
import {
    makeInputNode,
    makeDefaultNode,
    makeOutputNode,
    makeOnConnectWithColor,
} from '../flowkit/molds';

type EdgeKind = 'smoothstep' | 'bezier' | 'step' | 'straight';

type Props = {
    open: boolean;
    onClose: () => void;
    title?: string;
    nodes?: RFNode[];
    edges?: RFEdge[];
};

const defaultNodes: RFNode[] = [
    makeInputNode(
        'in',
        { x: 0, y: 0 },
        { content: 'Idea A', edgeLabel: 'conduce a' }
    ),
    makeDefaultNode('mid', { x: 420, y: 80 }, { label: 'Idea B' }),
    makeOutputNode('out', { x: 860, y: 0 }, { label: 'Idea C' }),
];

const defaultEdges: RFEdge[] = [];

export default function FlowModal({
    open,
    onClose,
    title = 'Esquema',
    nodes = defaultNodes,
    edges = defaultEdges,
}: Props) {
    const [nf, , onN] = useNodesState<RFNode>(nodes);
    const [ef, setE, onE] = useEdgesState<RFEdge>(edges);
    const [edgeType, setType] = React.useState<EdgeKind>('smoothstep');

    // usa solo data.edgeLabel del nodo source
    const getNodeLabel = React.useCallback(
        (id: string) => {
            const n = nf.find((x) => x.id === id);
            const d = n?.data as any;
            return typeof d?.edgeLabel === 'string' ? d.edgeLabel : undefined;
        },
        [nf]
    );

    const onConnect = React.useMemo(
        () => makeOnConnectWithColor(edgeType, getNodeLabel)(setE),
        [edgeType, setE, getNodeLabel]
    );

    React.useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open, onClose]);

    // reetiquetar si cambian edgeLabel en nodos
    React.useEffect(() => {
        setE((prev) =>
            prev.map((e) => {
                const newLabel =
                    (getNodeLabel(e.source) || '').trim() || undefined;
                return newLabel !== e.label ? { ...e, label: newLabel } : e;
            })
        );
    }, [nf, setE, getNodeLabel]);

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
                        gap: 8,
                        justifyContent: 'space-between',
                        padding: '12px 16px',
                        borderBottom: '1px solid #e5e7eb',
                    }}
                >
                    <h2 id="flow-title" style={{ margin: 0, fontSize: 16 }}>
                        {title}
                    </h2>
                    <div style={{ display: 'flex', gap: 8 }}>
                        {(
                            [
                                'smoothstep',
                                'bezier',
                                'step',
                                'straight',
                            ] as EdgeKind[]
                        ).map((t) => (
                            <button
                                key={t}
                                onClick={() => setType(t)}
                                style={{
                                    padding: '6px 10px',
                                    borderRadius: 8,
                                    border: '1px solid #e5e7eb',
                                    background:
                                        edgeType === t ? '#e5f0ff' : '#fff',
                                }}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
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
                        onConnect={onConnect}
                        nodeTypes={nodeTypes}
                        defaultEdgeOptions={defaultEdgeOptions}
                        connectionLineComponent={connectionLineComponent}
                        fitView
                    />
                </div>
            </div>
        </div>
    );
}
