import React, { memo } from 'react';
import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';

export type AscData = {
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

    topColors?: string[]; // TARGETS (arriba)
    bottomColors?: string[]; // SOURCES (abajo)
    leftColors?: string[]; // TARGETS (izquierda)
    rightColors?: string[]; // SOURCES (derecha)
};

// Tipos de nodo concretos para NodeProps
type AscInputNodeT = Node<AscData, 'asc-input'>;
type AscDefaultNodeT = Node<AscData, 'asc-default'>;
type AscOutputNodeT = Node<AscData, 'asc-output'>;

const HANDLE = 10;
const OUT = -8; // separación hacia fuera del nodo
const HS: React.CSSProperties = {
    width: HANDLE,
    height: HANDLE,
    borderRadius: HANDLE / 2,
    boxShadow: '0 0 0 1px rgba(0,0,0,0.1)',
};

function Box({ data, children }: { data: AscData; children: React.ReactNode }) {
    const pad = data?.padding ?? '1rem';
    const radius = data?.radius ?? 10;
    const border = `${data?.borderWidth ?? 1}px solid ${
        data?.borderColor ?? 'transparent'
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
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
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
            {children}
        </div>
    );
}

function TopTargets(colors: string[] | undefined, isConnectable: boolean) {
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

function BottomSources(colors: string[] | undefined, isConnectable: boolean) {
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

function LeftTargets(colors: string[] | undefined, isConnectable: boolean) {
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

function RightSources(colors: string[] | undefined, isConnectable: boolean) {
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

export const AscInputNode = memo(function AscInputNode({
    data,
    isConnectable,
}: NodeProps<AscInputNodeT>) {
    return (
        <Box data={data}>{BottomSources(data.bottomColors, isConnectable)}</Box>
    );
});

export const AscDefaultNode = memo(function AscDefaultNode({
    data,
    isConnectable,
}: NodeProps<AscDefaultNodeT>) {
    return (
        <Box data={data}>
            {TopTargets(data.topColors, isConnectable)}
            {BottomSources(data.bottomColors, isConnectable)}
            {LeftTargets(data.leftColors, isConnectable)}
            {RightSources(data.rightColors, isConnectable)}
        </Box>
    );
});

export const AscOutputNode = memo(function AscOutputNode({
    data,
    isConnectable,
}: NodeProps<AscOutputNodeT>) {
    return <Box data={data}>{TopTargets(data.topColors, isConnectable)}</Box>;
});
