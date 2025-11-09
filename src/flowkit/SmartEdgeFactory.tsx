// src/flowkit/SmartEdgeFactory.tsx
import React from 'react';
import {
    BaseEdge,
    EdgeLabelRenderer,
    getBezierPath,
    getSmoothStepPath,
    getStraightPath,
    type EdgeProps,
    type Position,
} from '@xyflow/react';
import { beginLayout, placeAlongPath, type Rect } from './LabelLayout';

type Kind = 'smoothstep' | 'bezier' | 'step' | 'straight';

/** Path ortogonal simple estilo "step" */
function getStepPathD(
    sourceX: number,
    sourceY: number,
    targetX: number,
    targetY: number,
    sourcePosition?: Position,
    targetPosition?: Position
) {
    const useVerticalFirst =
        sourcePosition === 'top' ||
        sourcePosition === 'bottom' ||
        targetPosition === 'top' ||
        targetPosition === 'bottom';

    if (useVerticalFirst) {
        const my = (sourceY + targetY) / 2;
        return `M ${sourceX},${sourceY} L ${sourceX},${my} L ${targetX},${my} L ${targetX},${targetY}`;
    } else {
        const mx = (sourceX + targetX) / 2;
        return `M ${sourceX},${sourceY} L ${mx},${sourceY} L ${mx},${targetY} L ${targetX},${targetY}`;
    }
}

/** Curvatura: rechaza puntos con giro local grande */
function makeAllowed(path: SVGPathElement, total: number) {
    const eps = Math.max(2, Math.min(10, total * 0.01)); // 1% de longitud en px
    const degLimit = 35;
    return (t: number) => {
        const L = total * t;
        const p0 = path.getPointAtLength(Math.max(0, L - eps));
        const p1 = path.getPointAtLength(L);
        const p2 = path.getPointAtLength(Math.min(total, L + eps));
        const v1x = p1.x - p0.x,
            v1y = p1.y - p0.y;
        const v2x = p2.x - p1.x,
            v2y = p2.y - p1.y;
        const n1 = Math.hypot(v1x, v1y) || 1;
        const n2 = Math.hypot(v2x, v2y) || 1;
        const dot = (v1x / n1) * (v2x / n2) + (v1y / n1) * (v2y / n2);
        const clamped = Math.max(-1, Math.min(1, dot));
        const ang = (Math.acos(clamped) * 180) / Math.PI;
        return ang <= degLimit;
    };
}

export default function makeSmartEdge(kind: Kind) {
    const SmartEdge = (props: any) => {
        const {
            id,
            sourceX,
            sourceY,
            sourcePosition,
            targetX,
            targetY,
            targetPosition,
            markerEnd,
            style,
            label,
            data,
        } = props as EdgeProps<any>;

        let pathD: string;
        switch (kind) {
            case 'bezier':
                [pathD] = getBezierPath({
                    sourceX,
                    sourceY,
                    sourcePosition,
                    targetX,
                    targetY,
                    targetPosition,
                });
                break;
            case 'straight':
                [pathD] = getStraightPath({
                    sourceX,
                    sourceY,
                    targetX,
                    targetY,
                });
                break;
            case 'step':
                pathD = getStepPathD(
                    sourceX,
                    sourceY,
                    targetX,
                    targetY,
                    sourcePosition,
                    targetPosition
                );
                break;
            default:
                [pathD] = getSmoothStepPath({
                    sourceX,
                    sourceY,
                    sourcePosition,
                    targetX,
                    targetY,
                    targetPosition,
                });
        }

        const pathRef = React.useRef<SVGPathElement | null>(null);
        const labelRef = React.useRef<HTMLDivElement | null>(null);
        const lastEpochRef = React.useRef<number>(-1);
        const [pos, setPos] = React.useState<{ x: number; y: number }>({
            x: 0,
            y: 0,
        });

        // Epoch y obstáculos (nodos) se inyectan desde el playground
        const epoch = Number((data as any)?.layoutEpoch ?? 0);
        const nodeRects = ((data as any)?.nodeRects ?? []) as Rect[];
        const tPref =
            typeof (data as any)?.labelT === 'number'
                ? Math.max(0.08, Math.min(0.92, (data as any).labelT))
                : 0.5;

        React.useLayoutEffect(() => {
            if (!label || !pathRef.current || !labelRef.current) return;
            if (epoch === lastEpochRef.current) return; // cohesión temporal

            beginLayout(epoch, nodeRects); // solver global por pasada

            const path = pathRef.current;
            const total = path.getTotalLength();
            const w = labelRef.current.offsetWidth || 0;
            const h = labelRef.current.offsetHeight || 0;

            const allowed = makeAllowed(path, total);

            const pointAt = (t: number) => {
                const pt = path.getPointAtLength(total * t);
                return { x: pt.x, y: pt.y };
            };

            const { t } = placeAlongPath(
                pointAt,
                w,
                h,
                total,
                tPref,
                18, // stride px
                28, // iter máx
                0.08,
                0.92,
                allowed,
                id // desempate determinista
            );

            const pt = path.getPointAtLength(total * t);
            setPos({ x: pt.x, y: pt.y });
            lastEpochRef.current = epoch;
        }, [label, epoch, pathD, id, tPref, nodeRects]);

        return (
            <>
                <BaseEdge path={pathD} markerEnd={markerEnd} style={style} />
                {/* path oculto para medir */}
                <svg
                    width={0}
                    height={0}
                    style={{ position: 'absolute', overflow: 'visible' }}
                >
                    <path
                        ref={pathRef}
                        d={pathD}
                        fill="none"
                        stroke="transparent"
                    />
                </svg>
                {label ? (
                    <EdgeLabelRenderer>
                        <div
                            ref={labelRef}
                            style={{
                                position: 'absolute',
                                transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px)`,
                                pointerEvents: 'all',
                                fontSize: 12,
                                padding: '4px 6px',
                                borderRadius: 6,
                                background: 'white',
                                color: '#334155',
                                boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {label}
                        </div>
                    </EdgeLabelRenderer>
                ) : null}
            </>
        );
    };

    return SmartEdge as unknown as React.ComponentType<any>;
}
