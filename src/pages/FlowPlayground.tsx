import '@xyflow/react/dist/style.css';

import {
    Background,
    Controls,
    ReactFlow,
    useEdgesState,
    useNodesState,
} from '@xyflow/react';
import { DEMO_EDGES, DEMO_NODES } from '../flowkit/presets';
import {
    connectionLineComponent,
    defaultEdgeOptions,
    nodeTypes,
} from '../flowkit';

import { onConnectWithColor } from '../flowkit/molds';

export default function FlowPlayground() {
    const [nodes, , onNodesChange] = useNodesState(DEMO_NODES);
    const [edges, setEdges, onEdgesChange] = useEdgesState(DEMO_EDGES);
    const onConnect = onConnectWithColor(setEdges);

    return (
        <div style={{ width: '100%', height: '100vh' }}>
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
