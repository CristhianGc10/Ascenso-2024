// src/flowkit/index.ts

import { AscDefaultNode, AscInputNode, AscOutputNode } from './AscNodes';
import type { DefaultEdgeOptions, NodeTypes } from '@xyflow/react';

import ConnectionLine from './ConnectionLine';
import CustomNode from './CustomNode';
import { MarkerType } from '@xyflow/react';

export const nodeTypes: NodeTypes = {
    'asc-input': AscInputNode,
    'asc-default': AscDefaultNode,
    'asc-output': AscOutputNode,
    'asc-node': CustomNode,
};

export const defaultEdgeOptions: DefaultEdgeOptions = {
    animated: true,
    style: { strokeWidth: 1.5 },
    labelStyle: { fontSize: 12, fill: '#334155' },
    markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 16,
        height: 16,
    },
};

export const connectionLineComponent = ConnectionLine;
