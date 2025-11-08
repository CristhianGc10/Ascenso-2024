// src/flowkit/molds.ts
import {
    addEdge,
    MarkerType,
    type Connection,
    type Edge as RFEdge,
    type Node as RFNode,
} from '@xyflow/react';
import type { AscData } from './AscNodes';

type Pos = { x: number; y: number };

/* ===================== PALLETA 16 ===================== */
/* Inputs (3, sources abajo) */
const INPUT_COLORS = ['#FF6467', '#9AE630', '#2984D1'] as const;

/* Default: 10 en total -> 5 targets (top+left) y 5 sources (bottom+right) */
const DEF_TARGETS = [
    '#FFD6A7',
    '#8E51FF',
    '#8EC5FF',
    '#BBF451',
    '#31D492',
] as const; // 3 top, 2 left
const DEF_SOURCES = [
    '#FE9A37',
    '#FF8904',
    '#53EAFD',
    '#7BF1A8',
    '#C27AFF',
] as const; // 3 bottom, 2 right

/* Outputs (3, targets arriba) */
const OUTPUT_COLORS = ['#FFCCD3', '#37BC7D', '#96F7E4'] as const;

/* ===================== LUTs DE COLOR (39) ===================== */
/* Orden: I0..I2 × Dtargets[0..4] */
const LUT_INPUT__DEF_TARGET: string[][] = [
    ['#FFB056', '#FFAB4B', '#F5AA59', '#F59B77', '#F48E8F'],
    ['#FCC959', '#F5BA4E', '#E9B95D', '#E8AB7B', '#7F6F7A'],
    ['#89619C', '#9755B0', '#A64BA9', '#B04196', '#A83E8E'],
];

/* Orden: I0..I2 × O0..O2 */
const LUT_INPUT__OUTPUT: string[][] = [
    ['#FF8057', '#8B7E6F', '#8A9080'],
    ['#8D9FB9', '#9BB5D9', '#76A96B'],
    ['#72AB95', '#73BCCB', '#6AB2EB'],
];

/* Orden: Dsources[0..4] × O0..O2 */
const LUT_DEF_SOURCE__OUTPUT: string[][] = [
    ['#87B2F7', '#99A5FB', '#AAACFF'],
    ['#A89D99', '#9CA4C8', '#9E8DD9'],
    ['#B087E0', '#6FB97A', '#6FBB9D'],
    ['#70C9BF', '#6FB5DB', '#7DA8E4'],
    ['#87A3E6', '#9D9EDF', '#B09AD9'],
];

/* ===================== MEZCLA HSL VIVA (fallback) ===================== */
function hexToRgb(hex: string) {
    const s = hex.replace('#', '');
    const v =
        s.length === 3
            ? s
                  .split('')
                  .map((c) => c + c)
                  .join('')
            : s;
    const n = parseInt(v, 16);
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}
function rgbToHex(r: number, g: number, b: number) {
    const h = (x: number) => x.toString(16).padStart(2, '0');
    return `#${h(r)}${h(g)}${h(b)}`;
}
function rgbToHsl(r: number, g: number, b: number) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    let h = 0,
        s = 0,
        l = (max + min) / 2;
    const d = max - min;
    if (d) {
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            default:
                h = (r - g) / d + 4;
        }
        h *= 60;
    }
    return { h, s, l };
}
function hslToRgb(h: number, s: number, l: number) {
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
    let r = 0,
        g = 0,
        b = 0;
    if (h < 60) {
        r = c;
        g = x;
        b = 0;
    } else if (h < 120) {
        r = x;
        g = c;
        b = 0;
    } else if (h < 180) {
        r = 0;
        g = c;
        b = x;
    } else if (h < 240) {
        r = 0;
        g = x;
        b = c;
    } else if (h < 300) {
        r = x;
        g = 0;
        b = c;
    } else {
        r = c;
        g = 0;
        b = x;
    }
    return {
        r: Math.round((r + m) * 255),
        g: Math.round((g + m) * 255),
        b: Math.round((b + m) * 255),
    };
}
function mixVividHex(aHex: string, bHex: string, t = 0.5) {
    const A = hexToRgb(aHex),
        B = hexToRgb(bHex);
    const ah = rgbToHsl(A.r, A.g, A.b);
    const bh = rgbToHsl(B.r, B.g, B.b);
    const dh = ((bh.h - ah.h + 540) % 360) - 180;
    const h = (ah.h + t * dh + 360) % 360;
    const s = Math.max(ah.s, bh.s, 0.9);
    const l = 0.5;
    const { r, g, b } = hslToRgb(h, s, l);
    return rgbToHex(r, g, b);
}

/* ===================== FACTORIES NODOS ===================== */
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
            tint: '#fff',
            padding: '1rem',
            bottomColors: [...INPUT_COLORS],
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
            tint: '#fff',
            padding: '1rem',
            // targets (5): top(3) + left(2)
            topColors: [DEF_TARGETS[0], DEF_TARGETS[1], DEF_TARGETS[2]],
            leftColors: [DEF_TARGETS[3], DEF_TARGETS[4]],
            // sources (5): bottom(3) + right(2)
            bottomColors: [DEF_SOURCES[0], DEF_SOURCES[1], DEF_SOURCES[2]],
            rightColors: [DEF_SOURCES[3], DEF_SOURCES[4]],
            ...data,
        },
    };
}
/* alias histórico */
export function makeAscNode(
    id: string,
    position: Pos,
    data: Partial<AscData> = {}
): RFNode<AscData> {
    return makeDefaultNode(id, position, data);
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
            tint: '#fff',
            padding: '1rem',
            topColors: [...OUTPUT_COLORS],
            ...data,
        },
    };
}

/* ===================== FACTORIES EDGES ===================== */
function edgeBase(
    id: string,
    source: string,
    target: string,
    type: RFEdge['type'],
    color: string,
    label?: string
): RFEdge {
    return {
        id,
        source,
        target,
        type,
        label,
        style: { stroke: color, strokeWidth: 1.5 },
        markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 16,
            height: 16,
            color,
        },
    };
}
export const makeStraightEdge = (
    id: string,
    s: string,
    t: string,
    color: string,
    label?: string
) => edgeBase(id, s, t, 'straight', color, label);
export const makeStepEdge = (
    id: string,
    s: string,
    t: string,
    color: string,
    label?: string
) => edgeBase(id, s, t, 'step', color, label);
export const makeSmoothEdge = (
    id: string,
    s: string,
    t: string,
    color: string,
    label?: string
) => edgeBase(id, s, t, 'smoothstep', color, label);
export const makeBezierEdge = (
    id: string,
    s: string,
    t: string,
    color: string,
    label?: string
) => edgeBase(id, s, t, 'bezier', color, label);

/* ===================== LUT DISPATCH ===================== */
function edgeColorFromPair(
    sourceHex?: string | null,
    targetHex?: string | null
): string | null {
    if (!sourceHex || !targetHex) return null;
    const s = sourceHex.toUpperCase();
    const t = targetHex.toUpperCase();

    const iIdx = INPUT_COLORS.indexOf(s as any);
    const dtIdx = DEF_TARGETS.indexOf(t as any);
    if (iIdx >= 0 && dtIdx >= 0) return LUT_INPUT__DEF_TARGET[iIdx][dtIdx];

    const oIdx = OUTPUT_COLORS.indexOf(t as any);
    if (iIdx >= 0 && oIdx >= 0) return LUT_INPUT__OUTPUT[iIdx][oIdx];

    const dsIdx = DEF_SOURCES.indexOf(s as any);
    if (dsIdx >= 0 && oIdx >= 0) return LUT_DEF_SOURCE__OUTPUT[dsIdx][oIdx];

    return null;
}

/* ===================== onConnect ===================== */
export function onConnectWithColor(
    setEdges: (updater: (eds: RFEdge[]) => RFEdge[]) => void
) {
    return (conn: Connection) => {
        const mapped =
            edgeColorFromPair(
                conn.sourceHandle as string,
                conn.targetHandle as string
            ) ||
            mixVividHex(
                (conn.sourceHandle as string) || '#2984D1',
                (conn.targetHandle as string) || '#37BC7D',
                0.5
            );

        setEdges((eds) =>
            addEdge(
                {
                    ...conn,
                    type: 'smoothstep',
                    style: { stroke: mapped, strokeWidth: 1.5 },
                    markerEnd: {
                        type: MarkerType.ArrowClosed,
                        width: 16,
                        height: 16,
                        color: mapped,
                    },
                },
                eds
            )
        );
    };
}
