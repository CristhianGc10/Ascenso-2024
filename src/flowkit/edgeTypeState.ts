// src/flowkit/edgeTypeState.ts  ← NUEVO
export type EdgeKind = 'straight' | 'step' | 'smoothstep' | 'bezier';

let current: EdgeKind = 'smoothstep';

export function setEdgeType(k: EdgeKind) {
    current = k;
}
export function getEdgeType(): EdgeKind {
    return current;
}
