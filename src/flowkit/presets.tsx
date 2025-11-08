// src/flowkit/presets.tsx

import type { Edge as RFEdge, Node as RFNode } from '@xyflow/react';
import { makeDefaultNode, makeInputNode, makeOutputNode } from './molds';

// Tamaño inicial con NodeResizer: usar node.style (no data.width/height)
const in1 = makeInputNode('in', { x: 0, y: 0 }, { content: 'Entrada' });
in1.style = { width: 240, height: 120 };

const mid = makeDefaultNode('mid', { x: 420, y: 80 }, { label: 'Proceso' });
mid.style = { width: 280, height: 140 };

const out = makeOutputNode('out', { x: 860, y: 0 }, { label: 'Salida' });
out.style = { width: 220, height: 120 };

export const DEMO_NODES: RFNode[] = [in1, mid, out];
export const DEMO_EDGES: RFEdge[] = [];
