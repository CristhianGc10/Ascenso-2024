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
    useStore,
} from '@xyflow/react';

import type { AscData } from '../flowkit/AscNodes';
import { DEMO_EDGES, DEMO_NODES } from '../flowkit/presets';
import {
    connectionLineComponent,
    defaultEdgeOptions,
    nodeTypes,
    edgeTypes,
} from '../flowkit';
import {
    makeOnConnectWithColorSmart,
    compileEdgeLabels,
} from '../flowkit/molds';

type Box = { l: number; t: number; r: number; b: number };
function nodeRect(n: any): Box {
    const w =
        (n.measured?.width as number) ??
        (typeof n.style?.width === 'number' ? n.style.width : 160);
    const h =
        (n.measured?.height as number) ??
        (typeof n.style?.height === 'number' ? n.style.height : 100);
    const x = n.position.x;
    const y = n.position.y;
    return { l: x, t: y, r: x + w, b: y + h };
}

type EdgeKind = 'smoothstep' | 'bezier' | 'step' | 'straight';
const TYPES: EdgeKind[] = ['smoothstep', 'bezier', 'step', 'straight'];

function TopBar({
    edgeType,
    setType,
}: {
    edgeType: EdgeKind;
    setType: (t: EdgeKind) => void;
}) {
    const interactive = useStore(
        (s) => s.nodesDraggable && s.nodesConnectable && s.elementsSelectable
    );
    if (!interactive) return null;
    return (
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
    );
}

export default function FlowPlayground() {
    const [nodes, , onNodesChange] = useNodesState<RFNode>(DEMO_NODES);
    const [edges, setEdges, onEdgesChange] = useEdgesState<RFEdge>(DEMO_EDGES);
    const [edgeType, setType] = React.useState<EdgeKind>('smoothstep');

    const [layoutEpoch, setLayoutEpoch] = React.useState(1);
    const bumpEpoch = React.useCallback(() => setLayoutEpoch((e) => e + 1), []);

    const getNodeData = React.useCallback(
        (id: string) =>
            nodes.find((x) => x.id === id)?.data as AscData | undefined,
        [nodes]
    );

    const onConnect = React.useMemo(
        () => makeOnConnectWithColorSmart(edgeType, getNodeData)(setEdges),
        [edgeType, setEdges, getNodeData]
    );

    React.useEffect(() => {
        setEdges((prev) =>
            prev.map((e) => {
                const d = getNodeData(e.source);
                const byHandle = d ? compileEdgeLabels(d) : {};
                const S = (e.sourceHandle || '').toString().toUpperCase();
                const next =
                    byHandle[S] ||
                    (typeof d?.edgeLabel === 'string'
                        ? d.edgeLabel
                        : undefined) ||
                    undefined;
                return next !== e.label ? { ...e, label: next } : e;
            })
        );
        bumpEpoch();
    }, [nodes, setEdges, getNodeData, bumpEpoch]);

    React.useEffect(() => {
        const rects = nodes.map(nodeRect);
        setEdges((prev) =>
            prev.map((e) => {
                const curr = e.data as any;
                const sameEpoch = curr?.layoutEpoch === layoutEpoch;
                const sameRects =
                    curr?.nodeRects &&
                    curr.nodeRects.length === rects.length &&
                    curr.nodeRects.every(
                        (r: Box, i: number) =>
                            r.l === rects[i].l &&
                            r.t === rects[i].t &&
                            r.r === rects[i].r &&
                            r.b === rects[i].b
                    );
                if (sameEpoch && sameRects) return e;
                return {
                    ...e,
                    data: { ...(curr || {}), layoutEpoch, nodeRects: rects },
                };
            })
        );
    }, [layoutEpoch, nodes, setEdges]);

    return (
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                defaultEdgeOptions={defaultEdgeOptions}
                connectionLineComponent={connectionLineComponent}
                onNodesChange={onNodesChange}
                onNodeDragStop={() => bumpEpoch()}
                onEdgesChange={(cs) => {
                    onEdgesChange(cs);
                    const removed =
                        Array.isArray(cs) &&
                        cs.some((c: any) => c.type?.includes('remove'));
                    if (removed) bumpEpoch();
                }}
                onConnect={(c) => {
                    onConnect(c);
                    bumpEpoch();
                }}
                fitView
                minZoom={0.2}
            >
                {/* Barra superior dependiente del candado nativo */}
                <TopBar edgeType={edgeType} setType={setType} />

                <Controls position="bottom-right" />
                <Background />
            </ReactFlow>
        </div>
    );
}
