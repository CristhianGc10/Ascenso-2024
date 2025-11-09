import React, { memo } from 'react';
import {
    Handle,
    Position,
    type Node,
    type NodeProps,
    useUpdateNodeInternals,
    useStore,
} from '@xyflow/react';

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
    edgeLabels?: Record<string, string>;
    edgeLabelSides?: Partial<{
        top: (string | undefined)[];
        bottom: (string | undefined)[];
        left: (string | undefined)[];
        right: (string | undefined)[];
    }>;
};

type AscInputNodeT = Node<AscData, 'asc-input'>;
type AscDefaultNodeT = Node<AscData, 'asc-default'>;
type AscOutputNodeT = Node<AscData, 'asc-output'>;

const HANDLE = 10;
const OUT = -14;
const HS: React.CSSProperties = {
    width: HANDLE,
    height: HANDLE,
    borderRadius: HANDLE / 2,
    boxShadow: '0 0 0 1px rgba(0,0,0,0.1)',
    zIndex: 2,
};

function useTallGuard<T extends HTMLElement>(
    id: string,
    ref: React.MutableRefObject<T | null>
) {
    const updateNodeInternals = useUpdateNodeInternals();
    React.useLayoutEffect(() => {
        if (!ref.current) return;
        const el = ref.current;
        const ro = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            if (width > height) el.style.minHeight = `${Math.ceil(width)}px`;
            requestAnimationFrame(() => updateNodeInternals(id));
        });
        ro.observe(el);
        return () => ro.disconnect();
    }, [id, updateNodeInternals, ref]);
}

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
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    overflowWrap: 'anywhere',
                }}
            >
                {data?.content ?? data?.label ?? 'Node'}
            </div>
            {children}
        </div>
    );
}

const validateConn = (c: any) => {
    const s = String(c?.source ?? '');
    const t = String(c?.target ?? '');
    if (!s || !t) return true;
    return s !== t;
};

function up(x?: string | null) {
    return (x ?? '').toString().toUpperCase();
}

function useUsedHandlesForNode(nodeId: string) {
    const edges = useStore((s) => s.edges);
    return React.useMemo(() => {
        const used = new Set<string>();
        for (const e of edges) {
            if (e.source === nodeId && e.sourceHandle)
                used.add(up(e.sourceHandle));
            if (e.target === nodeId && e.targetHandle)
                used.add(up(e.targetHandle));
        }
        return used;
    }, [edges, nodeId]);
}

function useLockedFromStore() {
    const interactive = useStore(
        (s) => s.nodesDraggable && s.nodesConnectable && s.elementsSelectable
    );
    return !interactive;
}

function TopTargets(
    colors: string[] | undefined,
    isConnectable: boolean,
    used: Set<string>,
    hideUnused: boolean
) {
    if (!colors?.length) return null;
    const n = colors.length;
    return colors.map((c, i) => {
        const hex = up(c);
        if (hideUnused && !used.has(hex)) return null;
        const leftPct = ((i + 1) / (n + 1)) * 100;
        return (
            <Handle
                key={`t-${i}-${hex}`}
                type="target"
                id={hex}
                position={Position.Top}
                isConnectable={isConnectable}
                isValidConnection={validateConn}
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
    used: Set<string>,
    hideUnused: boolean
) {
    if (!colors?.length) return null;
    const n = colors.length;
    return colors.map((c, i) => {
        const hex = up(c);
        if (hideUnused && !used.has(hex)) return null;
        const leftPct = ((i + 1) / (n + 1)) * 100;
        return (
            <Handle
                key={`b-${i}-${hex}`}
                type="source"
                id={hex}
                position={Position.Bottom}
                isConnectable={isConnectable}
                isValidConnection={validateConn}
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
    used: Set<string>,
    hideUnused: boolean
) {
    if (!colors?.length) return null;
    const n = colors.length;
    return colors.map((c, i) => {
        const hex = up(c);
        if (hideUnused && !used.has(hex)) return null;
        const topPct = ((i + 1) / (n + 1)) * 100;
        return (
            <Handle
                key={`l-${i}-${hex}`}
                type="target"
                id={hex}
                position={Position.Left}
                isConnectable={isConnectable}
                isValidConnection={validateConn}
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
    used: Set<string>,
    hideUnused: boolean
) {
    if (!colors?.length) return null;
    const n = colors.length;
    return colors.map((c, i) => {
        const hex = up(c);
        if (hideUnused && !used.has(hex)) return null;
        const topPct = ((i + 1) / (n + 1)) * 100;
        return (
            <Handle
                key={`r-${i}-${hex}`}
                type="source"
                id={hex}
                position={Position.Right}
                isConnectable={isConnectable}
                isValidConnection={validateConn}
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
}: NodeProps<AscInputNodeT>) {
    const ref = React.useRef<HTMLDivElement>(null);
    useTallGuard(id, ref);
    const used = useUsedHandlesForNode(id);
    const locked = useLockedFromStore();
    const hideUnused = locked;
    return (
        <div ref={ref} style={{ display: 'inline-block' }}>
            <Box data={data}>
                {BottomSources(
                    data.bottomColors,
                    isConnectable,
                    used,
                    hideUnused
                )}
            </Box>
        </div>
    );
});

export const AscDefaultNode = memo(function AscDefaultNode({
    id,
    data,
    isConnectable,
}: NodeProps<AscDefaultNodeT>) {
    const ref = React.useRef<HTMLDivElement>(null);
    useTallGuard(id, ref);
    const used = useUsedHandlesForNode(id);
    const locked = useLockedFromStore();
    const hideUnused = locked;
    return (
        <div ref={ref} style={{ display: 'inline-block' }}>
            <Box data={data}>
                {TopTargets(data.topColors, isConnectable, used, hideUnused)}
                {BottomSources(
                    data.bottomColors,
                    isConnectable,
                    used,
                    hideUnused
                )}
                {LeftTargets(data.leftColors, isConnectable, used, hideUnused)}
                {RightSources(
                    data.rightColors,
                    isConnectable,
                    used,
                    hideUnused
                )}
            </Box>
        </div>
    );
});

export const AscOutputNode = memo(function AscOutputNode({
    id,
    data,
    isConnectable,
}: NodeProps<AscOutputNodeT>) {
    const ref = React.useRef<HTMLDivElement>(null);
    useTallGuard(id, ref);
    const used = useUsedHandlesForNode(id);
    const locked = useLockedFromStore();
    const hideUnused = locked;
    return (
        <div ref={ref} style={{ display: 'inline-block' }}>
            <Box data={data}>
                {TopTargets(data.topColors, isConnectable, used, hideUnused)}
            </Box>
        </div>
    );
});
