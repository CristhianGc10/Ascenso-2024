// flowkit/blueprints.ts

import type { AscData } from './AscNodes';
import { makeDefaultNode } from './molds';

export function makeKpiNode(
    id: string,
    position: { x: number; y: number },
    opts: Partial<AscData> = {}
) {
    return makeDefaultNode(id, position, {
        tint: '#fffbea',
        padding: '1rem',
        topColors: ['#22c55e'],
        bottomColors: ['#3b82f6'],
        ...opts, // permite content/label/width personalizados
    });
}
