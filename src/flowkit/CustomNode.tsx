import React, { memo } from 'react';
import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';

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
};

type AscNode = Node<AscNodeData, 'asc-node'>;

const HANDLE = 10;
const HS: React.CSSProperties = {
    width: HANDLE,
    height: HANDLE,
    borderRadius: HANDLE / 2,
};

function CustomNode({ data, isConnectable }: NodeProps<AscNode>) {
    const pad = data?.padding ?? '1rem';
    const radius = data?.radius ?? 10;
    const border = `${data?.borderWidth ?? 1}px solid ${
        data?.borderColor ?? '#e5e7eb'
    }`;
    const shadow = data?.shadow ?? 'var(--xy-node-boxshadow-default)';

    const top = data?.topColors ?? ['#22c55e', '#a855f7', '#14b8a6'];
    const bottom = data?.bottomColors ?? ['#ef4444', '#3b82f6', '#f59e0b'];

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
            {/* Contenido: centra texto, pero permite a imágenes ocupar todo */}
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

            {/* TARGETS arriba, fuera (-8px) */}
            {top.map((c, i) => (
                <Handle
                    key={`t${i}`}
                    type="target"
                    id={`t-${i}`}
                    position={Position.Top}
                    style={{
                        ...HS,
                        top: -8,
                        left: `${20 + i * 30}%`,
                        background: c,
                    }}
                    isConnectable={isConnectable}
                />
            ))}

            {/* SOURCES abajo, fuera (-8px). id=color para heredar en edges */}
            {bottom.map((c, i) => (
                <Handle
                    key={`s${i}`}
                    type="source"
                    id={c}
                    position={Position.Bottom}
                    style={{
                        ...HS,
                        bottom: -8,
                        left: `${15 + i * 35}%`,
                        background: c,
                    }}
                    isConnectable={isConnectable}
                />
            ))}
        </div>
    );
}

export default memo(CustomNode);
