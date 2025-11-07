import type { Edge, Node } from '@xyflow/react';

export type FlowDefinition = {
    id: string;
    title?: string;
    nodes: Node[];
    edges: Edge[];
    viewport?: { x: number; y: number; zoom: number };
};

export type FlowRegistry = Record<string, FlowDefinition>;
