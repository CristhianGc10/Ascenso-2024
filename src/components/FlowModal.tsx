// src/components/FlowModal.tsx
import React from 'react';
import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    type Node as RFNode,
    type Edge as RFEdge,
    Background,
    Controls,
    Panel,
    useStore,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import {
    nodeTypes,
    defaultEdgeOptions,
    connectionLineComponent,
} from '../flowkit';

import { FLOW_SCHEMAS } from '../data/flows';
import type { FlowId } from '../data/flows';
import type { AscData } from '../flowkit/AscNodes';
import { makeOnConnectWithColorSmart } from '../flowkit/molds';

type EdgeKind = 'smoothstep' | 'bezier' | 'step' | 'straight';

type FlowNode = RFNode<AscData>;
type FlowEdge = RFEdge;

type Props = {
    open: boolean;
    onClose: () => void;
    flowId: FlowId | null;
};

/**
 * Panel interno para elegir el tipo de arista.
 * Se oculta automáticamente cuando el candado (interactivo) está cerrado.
 */
function EdgeTypePanel({
    edgeType,
    setType,
}: {
    edgeType: EdgeKind;
    setType: (t: EdgeKind) => void;
}) {
    // Interactivo = nodos arrastrables, conectables y seleccionables
    const isInteractive = useStore(
        (s) => s.nodesDraggable && s.nodesConnectable && s.elementsSelectable
    );

    if (!isInteractive) return null;

    return (
        <Panel position="top-right">
            <div
                style={{
                    display: 'flex',
                    gap: 6,
                    padding: 4,
                    background: 'rgba(255,255,255,0.9)',
                    borderRadius: 8,
                    boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
                }}
            >
                {(
                    ['smoothstep', 'bezier', 'step', 'straight'] as EdgeKind[]
                ).map((t) => (
                    <button
                        key={t}
                        onClick={() => setType(t)}
                        className="btn btn-ghost btn-small"
                        style={{
                            fontSize: 11,
                            padding: '4px 8px',
                            border:
                                edgeType === t
                                    ? '1px solid #2563eb'
                                    : '1px solid #e5e7eb',
                            background: edgeType === t ? '#e5f0ff' : '#ffffff',
                        }}
                    >
                        {t}
                    </button>
                ))}
            </div>
        </Panel>
    );
}

export default function FlowModal({ open, onClose, flowId }: Props) {
    if (!open || !flowId) return null;

    const schema = FLOW_SCHEMAS[flowId];
    if (!schema) return null;

    const [nf, , onN] = useNodesState<FlowNode>(schema.nodes);
    const [ef, setE, onE] = useEdgesState<FlowEdge>(schema.edges);
    const [edgeType, setType] = React.useState<EdgeKind>('smoothstep');

    const getNodeData = React.useCallback(
        (id: string): AscData | undefined => {
            const n = nf.find((x) => x.id === id);
            return (n?.data as AscData) ?? undefined;
        },
        [nf]
    );

    const onConnect = React.useMemo(
        () => makeOnConnectWithColorSmart(edgeType, getNodeData)(setE),
        [edgeType, getNodeData, setE]
    );

    React.useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open, onClose]);

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
                {/* Header: título + X del proyecto */}
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
                        {schema.title}
                    </h2>
                    <button
                        className="btn btn-ghost btn-small btn-icon"
                        onClick={onClose}
                        aria-label="Cerrar esquema"
                        title="Cerrar esquema"
                    >
                        ✕
                    </button>
                </header>

                {/* Zona del diagrama */}
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
                    >
                        <Background />

                        {/* Candadito: sin zoom +/– ni fit view */}
                        <Controls
                            showZoom={false}
                            showFitView={false}
                            showInteractive={true}
                        />

                        {/* Botones de tipo de arista dentro del canvas,
                            que desaparecen cuando el candado está cerrado */}
                        <EdgeTypePanel edgeType={edgeType} setType={setType} />
                    </ReactFlow>
                </div>
            </div>
        </div>
    );
}
