// src/flowkit/ConnectionLine.tsx

import { BaseEdge, getStraightPath } from '@xyflow/react';

import type { ConnectionLineComponentProps } from '@xyflow/react';
import { resolveEdgeHex } from './molds';

export default function ConnectionLine({
    fromX,
    fromY,
    toX,
    toY,
    fromHandle,
    toHandle,
}: ConnectionLineComponentProps) {
    const stroke =
        resolveEdgeHex(
            (fromHandle?.id as string) || undefined,
            (toHandle?.id as string) || undefined
        ) ?? '#D3D3D3';

    const [path] = getStraightPath({
        sourceX: fromX,
        sourceY: fromY,
        targetX: toX,
        targetY: toY,
    });

    return (
        <BaseEdge
            id="asc-connection-preview"
            path={path}
            style={{ stroke, strokeWidth: 1.5, strokeDasharray: 6 }}
        />
    );
}
