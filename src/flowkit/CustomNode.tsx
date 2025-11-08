// src/flowkit/CustomNode.tsx
import React, { memo } from 'react';
import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';
import { ASC_COLOR_SETS } from './molds';

export type AscNodeData = {
    label?: React.ReactNode;
    content?: React.ReactNode;
    justify?: boolean;
    tint?: string;
    width?: number | string;
    height?: number | string;
    padding?: number | string;
    radius?: number;
    borderColor?: string;
    borderWidth?: number;
    shadow?: string;
    topColors?: string[];
    bottomColors?: string[];
    leftColors?: string[];
    rightColors?: string[];
    edgeText?: string;
};

type AscNode = Node<AscNodeData, 'asc-node'>;

const { INPUT_SET, DEF_A_SET, OUTPUT_SET } = ASC_COLOR_SETS;

const HANDLE = 10;
const OUT = -14;
const HS: React.CSSProperties = {
    width: HANDLE,
    height: HANDLE,
    borderRadius: HANDLE / 2,
    boxShadow: '0 0 0 1px rgba(0,0,0,0.1)',
};
const up = (v?: string | null) => (v ?? '').toUpperCase();

function targetsTop(
    colors: string[] | undefined,
    isConnectable: boolean,
    nodeId: string,
    allowFrom: (sHex: string) => boolean
) {
    if (!colors?.length) return null;
    const n = colors.length;
    return colors.map((c, i) => {
        const hex = c.toUpperCase();
        const leftPct = ((i + 1) / (n + 1)) * 100;
        return (
            <Handle
                key={`t-${i}-${hex}`}
                type="target"
                id={hex}
                position={Position.Top}
                isConnectable={isConnectable}
                isValidConnection={(conn) =>
                    conn.source !== nodeId && allowFrom(up(conn.sourceHandle))
                }
                style={{
                    ...HS,
                    top: OUT,
                    left: `${leftPct}%`,
                    transform: 'translateX(-50%)',
                    background: hex,
                    borderColor: hex,
                }}
            />
        );
    });
}
function targetsLeft(
    colors: string[] | undefined,
    isConnectable: boolean,
    nodeId: string,
    allowFrom: (sHex: string) => boolean
) {
    if (!colors?.length) return null;
    const n = colors.length;
    return colors.map((c, i) => {
        const hex = c.toUpperCase();
        const topPct = ((i + 1) / (n + 1)) * 100;
        return (
            <Handle
                key={`l-${i}-${hex}`}
                type="target"
                id={hex}
                position={Position.Left}
                isConnectable={isConnectable}
                isValidConnection={(conn) =>
                    conn.source !== nodeId && allowFrom(up(conn.sourceHandle))
                }
                style={{
                    ...HS,
                    left: OUT,
                    top: `${topPct}%`,
                    transform: 'translateY(-50%)',
                    background: hex,
                    borderColor: hex,
                }}
            />
        );
    });
}
function sourcesBottom(
    colors: string[] | undefined,
    isConnectable: boolean,
    nodeId: string,
    allowTo: (tHex: string) => boolean
) {
    if (!colors?.length) return null;
    const n = colors.length;
    return colors.map((c, i) => {
        const hex = c.toUpperCase();
        const leftPct = ((i + 1) / (n + 1)) * 100;
        return (
            <Handle
                key={`b-${i}-${hex}`}
                type="source"
                id={hex}
                position={Position.Bottom}
                isConnectable={isConnectable}
                isValidConnection={(conn) =>
                    conn.target !== nodeId && allowTo(up(conn.targetHandle))
                }
                style={{
                    ...HS,
                    bottom: OUT,
                    left: `${leftPct}%`,
                    transform: 'translateX(-50%)',
                    background: hex,
                    borderColor: hex,
                }}
            />
        );
    });
}
function sourcesRight(
    colors: string[] | undefined,
    isConnectable: boolean,
    nodeId: string,
    allowTo: (tHex: string) => boolean
) {
    if (!colors?.length) return null;
    const n = colors.length;
    return colors.map((c, i) => {
        const hex = c.toUpperCase();
        const topPct = ((i + 1) / (n + 1)) * 100;
        return (
            <Handle
                key={`r-${i}-${hex}`}
                type="source"
                id={hex}
                position={Position.Right}
                isConnectable={isConnectable}
                isValidConnection={(conn) =>
                    conn.target !== nodeId && allowTo(up(conn.targetHandle))
                }
                style={{
                    ...HS,
                    right: OUT,
                    top: `${topPct}%`,
                    transform: 'translateY(-50%)',
                    background: hex,
                    borderColor: hex,
                }}
            />
        );
    });
}

export default memo(function CustomNode({
    id,
    data,
    isConnectable,
}: NodeProps<AscNode>) {
    const pad = data?.padding ?? '1rem';
    const radius = data?.radius ?? 10;
    const border = `${data?.borderWidth ?? 1}px solid ${
        data?.borderColor ?? '#e5e7eb'
    }`;
    const shadow = data?.shadow ?? 'var(--xy-node-boxshadow-default)';

    return (
        <div
            style={{
                position: 'relative',
                background: data?.tint ?? '#fff',
                borderRadius: radius,
                boxShadow: shadow,
                border,
                padding: pad,
                boxSizing: 'border-box',
                width: data?.width,
                height: data?.height,
                display: 'block',
            }}
        >
            <div
                className="asc-node__content"
                style={{
                    display: 'block',
                    width: 'auto',
                    height: 'auto',
                    textAlign: data?.justify ? ('justify' as const) : 'inherit',
                }}
            >
                {data?.content ?? data?.label ?? 'Node'}
            </div>

            {targetsTop(data?.topColors, isConnectable, id, (s) =>
                INPUT_SET.has(s)
            )}
            {sourcesBottom(
                data?.bottomColors,
                isConnectable,
                id,
                (t) => DEF_A_SET.has(t) || OUTPUT_SET.has(t)
            )}
            {targetsLeft(data?.leftColors, isConnectable, id, (s) =>
                INPUT_SET.has(s)
            )}
            {sourcesRight(data?.rightColors, isConnectable, id, (t) =>
                OUTPUT_SET.has(t)
            )}
        </div>
    );
});
