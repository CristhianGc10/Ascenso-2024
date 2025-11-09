import {
    addEdge,
    MarkerType,
    type Connection,
    type Edge as RFEdge,
    type Node as RFNode,
} from '@xyflow/react';
import type { AscData } from './AscNodes';

type Pos = { x: number; y: number };

const INPUT_COLORS = ['#FF0000', '#0000FF', '#00FF00'] as const;
const DEF_TARGETS = [
    '#FF00FF',
    '#FFFF00',
    '#00FFFF',
    '#FF7700',
    '#7700FF',
] as const;
const DEF_SOURCES = [
    '#FF0080',
    '#00FF80',
    '#80FF00',
    '#0080FF',
    '#FF0040',
] as const;
const OUTPUT_COLORS = ['#FF6A00', '#00B894', '#6C5CE7'] as const;

const PAIR_LUT: Record<string, string> = {
    '#FF0000|#FF00FF': '#FF0080',
    '#FF0000|#FFFF00': '#FF7F00',
    '#FF0000|#00FFFF': '#7F7FFF',
    '#FF0000|#FF7700': '#FF3F00',
    '#FF0000|#7700FF': '#BB0080',
    '#0000FF|#FF00FF': '#7F00FF',
    '#0000FF|#FFFF00': '#7F7F00',
    '#0000FF|#00FFFF': '#0080FF',
    '#0000FF|#FF7700': '#7F3F00',
    '#0000FF|#7700FF': '#3F00FF',
    '#00FF00|#FF00FF': '#7F7F80',
    '#00FF00|#FFFF00': '#7FFF00',
    '#00FF00|#00FFFF': '#00FF80',
    '#00FF00|#FF7700': '#7FBF00',
    '#00FF00|#7700FF': '#3F7F80',
    '#FF0000|#FF4400': '#FF2200',
    '#FF0000|#FF00AA': '#FF0055',
    '#0000FF|#FF4400': '#7F2200',
    '#0000FF|#FF00AA': '#7F0055',
    '#00FF00|#FF4400': '#7FBF00',
    '#00FF00|#FF00AA': '#7F7F55',
    '#FF4400|#FF0080': '#FF2240',
    '#FF4400|#00FF80': '#7FBF40',
    '#FF4400|#80FF00': '#BF7F00',
    '#FF4400|#0080FF': '#7F4280',
    '#FF4400|#FF0040': '#FF2220',
    '#00FFFF|#FF0080': '#7F7FBF',
    '#00FFFF|#00FF80': '#00FF80',
    '#00FFFF|#80FF00': '#40FF80',
    '#00FFFF|#0080FF': '#0080FF',
    '#00FFFF|#FF0040': '#7F7F80',
    '#FF00AA|#FF0080': '#FF0095',
    '#FF00AA|#00FF80': '#7F7F95',
    '#FF00AA|#80FF00': '#BF7F55',
    '#FF00AA|#0080FF': '#7F4095',
    '#FF00AA|#FF0040': '#FF0075',
};
for (const k of Object.keys(PAIR_LUT)) {
    const [a, b] = k.split('|');
    const rk = `${b}|${a}`;
    if (!(rk in PAIR_LUT) && rk !== k) PAIR_LUT[rk] = PAIR_LUT[k];
}

const INPUT_SET = new Set<string>(INPUT_COLORS as readonly string[]);
const OUTPUT_SET = new Set<string>(OUTPUT_COLORS as readonly string[]);
const DEF_A_SET = new Set<string>(DEF_TARGETS as readonly string[]);
const DEF_B_SET = new Set<string>(DEF_SOURCES as readonly string[]);

function mixHex(a: string, b: string): string {
    const to = (s: string) => {
        const n = parseInt(s.replace('#', ''), 16);
        return [(n >> 16) & 255, (n >> 8) & 255, n & 255] as const;
    };
    const [ar, ag, ab] = to(a);
    const [br, bg, bb] = to(b);
    const r = Math.round((ar + br) / 2);
    const g = Math.round((ag + bg) / 2);
    const c = Math.round((ab + bb) / 2);
    const hx = (n: number) => n.toString(16).padStart(2, '0').toUpperCase();
    return `#${hx(r)}${hx(g)}${hx(c)}`;
}

export function resolveEdgeHex(
    sourceHex?: string | null,
    targetHex?: string | null
): string | null {
    if (!sourceHex || !targetHex) return null;
    const S = sourceHex.toUpperCase();
    const T = targetHex.toUpperCase();
    return PAIR_LUT[`${S}|${T}`] ?? mixHex(S, T);
}

export function makeInputNode(
    id: string,
    position: Pos,
    data: Partial<AscData> = {}
): RFNode<AscData> {
    return {
        id,
        type: 'asc-input',
        position,
        data: {
            padding: '1rem',
            bottomColors: [DEF_TARGETS[0], DEF_TARGETS[1], DEF_TARGETS[2]],
            ...data,
        },
    };
}

export function makeDefaultNode(
    id: string,
    position: Pos,
    data: Partial<AscData> = {}
): RFNode<AscData> {
    return {
        id,
        type: 'asc-default',
        position,
        data: {
            padding: '1rem',
            topColors: [DEF_TARGETS[0], DEF_TARGETS[1], DEF_TARGETS[2]],
            leftColors: [DEF_TARGETS[3], DEF_TARGETS[4]],
            bottomColors: [
                OUTPUT_COLORS[0],
                OUTPUT_COLORS[1],
                OUTPUT_COLORS[2],
            ],
            rightColors: [DEF_SOURCES[3], DEF_SOURCES[4]],
            ...data,
        },
    };
}

export function makeOutputNode(
    id: string,
    position: Pos,
    data: Partial<AscData> = {}
): RFNode<AscData> {
    return {
        id,
        type: 'asc-output',
        position,
        data: {
            padding: '1rem',
            topColors: [...OUTPUT_COLORS],
            ...data,
        },
    };
}

export function paintSolid(node: RFNode<AscData>, color: string) {
    node.data = {
        ...(node.data as AscData),
        tint: color,
        contentBg: undefined,
        borderWidth: 0,
        shadow: 'none',
    };
    return node;
}

export function compileEdgeLabels(
    d: AscData | undefined
): Record<string, string> {
    const m: Record<string, string> = d?.edgeLabels ? { ...d.edgeLabels } : {};
    if (!d?.edgeLabelSides) return m;
    const up = (s?: string | null) => (s ?? '').toUpperCase();
    const assign = (colors?: string[], labels?: (string | undefined)[]) => {
        if (!colors || !labels) return;
        const n = Math.min(colors.length, labels.length);
        for (let i = 0; i < n; i++) {
            const lab = labels[i];
            if (typeof lab === 'string' && lab.trim())
                m[up(colors[i])] = lab.trim();
        }
    };
    assign(d.topColors, d.edgeLabelSides.top);
    assign(d.bottomColors, d.edgeLabelSides.bottom);
    assign(d.leftColors, d.edgeLabelSides.left);
    assign(d.rightColors, d.edgeLabelSides.right);
    return m;
}

export type EdgeLabelProviderByNode = (id: string) => AscData | undefined;

export function makeOnConnectWithColorSmart(
    edgeType: RFEdge['type'],
    getNodeData: EdgeLabelProviderByNode
) {
    const U = (s?: string | null) => (s ?? '').toUpperCase();
    return (setEdges: (updater: (eds: RFEdge[]) => RFEdge[]) => void) =>
        (conn: Connection) => {
            if (!conn.source || !conn.target) return;
            if (conn.source === conn.target) return;
            const S = (conn.sourceHandle as string) ?? '';
            const T = (conn.targetHandle as string) ?? '';
            const stroke = resolveEdgeHex(S, T) ?? '#8884D8';
            const data = getNodeData(String(conn.source));
            const byHandle = compileEdgeLabels(data);
            const label =
                (byHandle[U(S)] || data?.edgeLabel || '').trim() || undefined;
            setEdges((eds) =>
                addEdge(
                    {
                        ...conn,
                        type: edgeType,
                        label,
                        style: { stroke, strokeWidth: 1.5 },
                        markerEnd: {
                            type: MarkerType.ArrowClosed,
                            width: 16,
                            height: 16,
                            color: stroke,
                        },
                    },
                    eds
                )
            );
        };
}

export const ASC_COLOR_SETS = { INPUT_SET, DEF_A_SET, DEF_B_SET, OUTPUT_SET };
