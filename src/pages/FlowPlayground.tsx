// src/pages/FlowPlayground.tsx
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
import type { FlowId, FlowSchema } from '../data/flows';
import type { AscData } from '../flowkit/AscNodes';
import { makeOnConnectWithColorSmart } from '../flowkit/molds';

type EdgeKind = 'smoothstep' | 'bezier' | 'step' | 'straight';
type FlowNode = RFNode<AscData>;
type FlowEdge = RFEdge;

function EdgeTypePanel({
    edgeType,
    setType,
}: {
    edgeType: EdgeKind;
    setType: (t: EdgeKind) => void;
}) {
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

export default function FlowPlayground() {
    const allSchemas: FlowSchema[] = React.useMemo(
        () => Object.values(FLOW_SCHEMAS),
        []
    );

    const initialId: FlowId | '' = (allSchemas[0] && allSchemas[0].id) || '';

    const [currentId, setCurrentId] = React.useState<FlowId | ''>(initialId);
    const currentSchema = currentId ? FLOW_SCHEMAS[currentId] : undefined;

    const [nodes, setNodes, onNodesChange] = useNodesState<FlowNode>(
        currentSchema?.nodes ?? []
    );
    const [edges, setEdges, onEdgesChange] = useEdgesState<FlowEdge>(
        currentSchema?.edges ?? []
    );
    const [edgeType, setEdgeType] = React.useState<EdgeKind>('smoothstep');

    const getNodeData = React.useCallback(
        (id: string): AscData | undefined => {
            const n = nodes.find((x) => x.id === id);
            return (n?.data as AscData) ?? undefined;
        },
        [nodes]
    );

    const onConnect = React.useMemo(
        () => makeOnConnectWithColorSmart(edgeType, getNodeData)(setEdges),
        [edgeType, getNodeData, setEdges]
    );

    // Cuando cambias de esquema, resetea nodos y aristas
    React.useEffect(() => {
        if (!currentSchema) return;
        setNodes(currentSchema.nodes);
        setEdges(currentSchema.edges);
    }, [currentId, currentSchema, setNodes, setEdges]);

    return (
        <div
            className="container"
            style={{ paddingTop: 16, paddingBottom: 16 }}
        >
            <div
                className="card"
                style={{
                    marginBottom: 16,
                    padding: 12,
                    display: 'flex',
                    gap: 12,
                }}
            >
                <div style={{ flex: 1 }}>
                    <label
                        htmlFor="flow-select"
                        style={{ display: 'block', marginBottom: 4 }}
                    >
                        Seleccione esquema (flowId)
                    </label>
                    <select
                        id="flow-select"
                        value={currentId}
                        onChange={(e) => setCurrentId(e.target.value as FlowId)}
                        style={{
                            width: '100%',
                            padding: '6px 8px',
                            borderRadius: 6,
                            border: '1px solid #d0d7de',
                        }}
                    >
                        {allSchemas.map((s) => (
                            <option key={s.id} value={s.id}>
                                {s.id} — {s.title}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div
                className="card"
                style={{
                    height: 'min(620px, 80vh)',
                    padding: 0,
                    overflow: 'hidden',
                }}
            >
                {currentSchema ? (
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        nodeTypes={nodeTypes}
                        defaultEdgeOptions={defaultEdgeOptions}
                        connectionLineComponent={connectionLineComponent}
                        fitView
                    >
                        <Background />

                        {/* Controles: candado + zoom (aquí es dev, puedes dejar zoom activo si quieres) */}
                        <Controls
                            showZoom={true}
                            showFitView={true}
                            showInteractive={true}
                        />

                        <EdgeTypePanel
                            edgeType={edgeType}
                            setType={setEdgeType}
                        />
                    </ReactFlow>
                ) : (
                    <div
                        style={{
                            padding: 16,
                            fontSize: 14,
                            color: '#6e7781',
                        }}
                    >
                        No hay esquemas registrados en FLOW_SCHEMAS.
                    </div>
                )}
            </div>
        </div>
    );
}
