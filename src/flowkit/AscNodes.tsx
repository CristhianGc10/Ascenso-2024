import React, { memo } from 'react';
import {
    Handle,
    Position,
    NodeResizer,
    type Node,
    type NodeProps,
} from '@xyflow/react';
import { ASC_COLOR_SETS } from './molds';

export type AscData = {
    label?: React.ReactNode;
    content?: React.ReactNode;
    textAlign?: 'left' | 'center' | 'right' | 'justify';
    fontSize?: number | string;
    fontWeight?: number | string;
    fontFamily?: string;
    lineHeight?: number | string;
    textColor?: string;
    justify?: boolean;
    tint?: string;
    width?: number | string;
    height?: number | string;
    padding?: number | string;
    radius?: number;
    borderColor?: string;
    borderWidth?: number;
    shadow?: string;
    contentBg?: string;
    contentPadding?: number | string;
    topColors?: string[];
    bottomColors?: string[];
    leftColors?: string[];
    rightColors?: string[];
    edgeLabel?: string;
};

type AscInputNodeT = Node<AscData, 'asc-input'>;
type AscDefaultNodeT = Node<AscData, 'asc-default'>;
type AscOutputNodeT = Node<AscData, 'asc-output'>;

const { INPUT_SET, DEF_A_SET, DEF_B_SET, OUTPUT_SET } = ASC_COLOR_SETS;

const HANDLE = 10;
const OUT = -14;
const HS: React.CSSProperties = {
    width: HANDLE,
    height: HANDLE,
    borderRadius: HANDLE / 2,
    boxShadow: '0 0 0 1px rgba(0,0,0,0.1)',
    zIndex: 2,
};
const up = (v?: string | null) => (v ?? '').toUpperCase();

function Box({ data, children }: { data: AscData; children: React.ReactNode }) {
    const pad = data?.padding ?? '1rem';
    const radius = data?.radius ?? 10;
    const border = `${data?.borderWidth ?? 1}px solid ${
        data?.borderColor ?? 'transparent'
    }`;
    const shadow = data?.shadow ?? 'var(--xy-node-boxshadow-default)';
    const contentPad = data?.contentPadding ?? pad;
    const fs = data?.fontSize ?? '1rem';
    const lh = data?.lineHeight ?? 1.4;
    const fw = data?.fontWeight ?? 400;
    const ff = data?.fontFamily;
    const ta = data?.textAlign ?? (data?.justify ? 'justify' : 'left');
    const tc = data?.textColor ?? '#111827';

    return (
        <div
            style={{
                position: 'relative',
                background: data?.tint ?? '#fff',
                borderRadius: radius,
                boxShadow: shadow,
                border,
                padding: 0,
                boxSizing: 'border-box',
                width: '100%',
                height: '100%',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gridTemplateRows: '1fr',
                overflow: 'visible',
            }}
        >
            <div
                className="asc-node__content"
                style={{
                    gridColumn: '1 / -1',
                    gridRow: '1 / -1',
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    zIndex: 1,
                    background: data?.contentBg,
                    padding: contentPad,
                    textAlign: ta,
                    fontSize: fs,
                    lineHeight: lh as any,
                    fontWeight: fw as any,
                    fontFamily: ff,
                    color: tc,
                }}
            >
                {data?.content ?? data?.label ?? 'Node'}
            </div>
            {children}
        </div>
    );
}

function TopTargets(
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

function BottomSources(
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

function LeftTargets(
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

function RightSources(
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

export const AscInputNode = memo(function AscInputNode({
    id,
    data,
    isConnectable,
    selected,
}: NodeProps<AscInputNodeT>) {
    return (
        <Box data={data}>
            <NodeResizer
                isVisible={!!selected}
                minWidth={120}
                minHeight={60}
                color="#0ea5e9"
                handleStyle={{ width: 8, height: 8 }}
                lineStyle={{ strokeWidth: 1 }}
                keepAspectRatio={false}
            />
            {BottomSources(
                data.bottomColors,
                isConnectable,
                id,
                (t) => DEF_A_SET.has(t) || OUTPUT_SET.has(t)
            )}
        </Box>
    );
});

export const AscDefaultNode = memo(function AscDefaultNode({
    id,
    data,
    isConnectable,
    selected,
}: NodeProps<AscDefaultNodeT>) {
    return (
        <Box data={data}>
            <NodeResizer
                isVisible={!!selected}
                minWidth={160}
                minHeight={80}
                color="#0ea5e9"
                handleStyle={{ width: 8, height: 8 }}
                lineStyle={{ strokeWidth: 1 }}
                keepAspectRatio={false}
            />
            {TopTargets(data.topColors, isConnectable, id, (s) =>
                INPUT_SET.has(s)
            )}
            {BottomSources(data.bottomColors, isConnectable, id, (t) =>
                OUTPUT_SET.has(t)
            )}
            {LeftTargets(data.leftColors, isConnectable, id, (s) =>
                INPUT_SET.has(s)
            )}
            {RightSources(data.rightColors, isConnectable, id, (t) =>
                OUTPUT_SET.has(t)
            )}
        </Box>
    );
});

export const AscOutputNode = memo(function AscOutputNode({
    id,
    data,
    isConnectable,
    selected,
}: NodeProps<AscOutputNodeT>) {
    return (
        <Box data={data}>
            <NodeResizer
                isVisible={!!selected}
                minWidth={120}
                minHeight={60}
                color="#cfd6d9ff"
                handleStyle={{ width: 8, height: 8 }}
                lineStyle={{ strokeWidth: 1 }}
                keepAspectRatio={false}
            />
            {TopTargets(data.topColors, isConnectable, id, (s) =>
                DEF_B_SET.has(s)
            )}
        </Box>
    );
});
