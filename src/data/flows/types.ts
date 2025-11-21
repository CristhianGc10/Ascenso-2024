// src/data/flows/types.ts

import type { Edge as RFEdge, Node as RFNode } from '@xyflow/react';

import type { AscData } from '../../flowkit/AscNodes';

export type FlowId = string;

export type FlowSchema = {
    id: FlowId;
    title: string;
    nodes: RFNode<AscData>[];
    edges: RFEdge[];
};
