// src/pages/FlowPlayground.tsx
import '@xyflow/react/dist/style.css';
import React from 'react';
import {
    Background,
    Controls,
    ReactFlow,
    useEdgesState,
    useNodesState,
    type Edge as RFEdge,
    type Node as RFNode,
} from '@xyflow/react';
import { DEMO_EDGES, DEMO_NODES } from '../flowkit/presets';
import {
    connectionLineComponent,
    defaultEdgeOptions,
    nodeTypes,
} from '../flowkit';
import { makeOnConnectWithColor } from '../flowkit/molds';

type EdgeKind = 'smoothstep' | 'bezier' | 'step' | 'straight';
const TYPES: EdgeKind[] = ['smoothstep', 'bezier', 'step', 'straight'];

export default function FlowPlayground() {
    const [nodes, , onNodesChange] = useNodesState<RFNode>(DEMO_NODES);
    const [edges, setEdges, onEdgesChange] = useEdgesState<RFEdge>(DEMO_EDGES);
    const [edgeType, setType] = React.useState<EdgeKind>('smoothstep');

    // usa solo data.edgeLabel del nodo source
    const getNodeLabel = React.useCallback(
        (id: string) => {
            const n = nodes.find((x) => x.id === id);
            const d = n?.data as any;
            return typeof d?.edgeLabel === 'string' ? d.edgeLabel : undefined;
        },
        [nodes]
    );

    const onConnect = React.useMemo(
        () => makeOnConnectWithColor(edgeType, getNodeLabel)(setEdges),
        [edgeType, setEdges, getNodeLabel]
    );

    // reetiquetar edges si cambia edgeLabel en nodos
    React.useEffect(() => {
        setEdges((prev) =>
            prev.map((e) => {
                const newLabel =
                    (getNodeLabel(e.source) || '').trim() || undefined;
                return newLabel !== e.label ? { ...e, label: newLabel } : e;
            })
        );
    }, [nodes, setEdges, getNodeLabel]);

    return (
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
            <div
                style={{
                    position: 'absolute',
                    zIndex: 5,
                    top: 8,
                    left: 8,
                    display: 'flex',
                    gap: 8,
                    background: '#fff',
                    padding: '6px 8px',
                    borderRadius: 8,
                    boxShadow: '0 1px 6px rgba(0,0,0,0.12)',
                }}
            >
                {TYPES.map((t) => (
                    <button
                        key={t}
                        onClick={() => setType(t)}
                        style={{
                            padding: '6px 10px',
                            borderRadius: 8,
                            border: '1px solid #e5e7eb',
                            background: edgeType === t ? '#e5f0ff' : '#fff',
                            cursor: 'pointer',
                        }}
                        title={`Nuevo edge: ${t}`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                defaultEdgeOptions={defaultEdgeOptions}
                connectionLineComponent={connectionLineComponent}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
                minZoom={0.2}
            >
                <Controls position="bottom-right" />
                <Background />
            </ReactFlow>
        </div>
    );
}
