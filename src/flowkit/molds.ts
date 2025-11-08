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

/* Paleta fija (tu actualización) */
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
const OUTPUT_COLORS = ['#FF4400', '#00FFFF', '#FF00AA'] as const;

/* LUT actualizada (39) */
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
// bidireccional
for (const k of Object.keys(PAIR_LUT)) {
    const [a, b] = k.split('|');
    const rk = `${b}|${a}`;
    if (!(rk in PAIR_LUT) && rk !== k) PAIR_LUT[rk] = PAIR_LUT[k];
}

/* Conjuntos para validación */
const INPUT_SET = new Set<string>(INPUT_COLORS as readonly string[]);
const OUTPUT_SET = new Set<string>(OUTPUT_COLORS as readonly string[]);
const DEF_A_SET = new Set<string>(DEF_TARGETS as readonly string[]); // targets Default (arriba+izq)
const DEF_B_SET = new Set<string>(DEF_SOURCES as readonly string[]); // sources Default (abajo+der)

/* Color del edge desde los ids HEX */
export function resolveEdgeHex(
    sourceHex?: string | null,
    targetHex?: string | null
): string | null {
    if (!sourceHex || !targetHex) return null;
    const S = sourceHex.toUpperCase();
    const T = targetHex.toUpperCase();
    return PAIR_LUT[`${S}|${T}`] ?? null;
}

/* Factorías de nodos: aceptan data parcial y se combinan con lo necesario */
export function makeInputNode(
    id: string,
    position: Pos,
    data: Partial<AscData> = {}
): RFNode<AscData> {
    return {
        id,
        type: 'asc-input',
        position,
        data: { padding: '1rem', bottomColors: [...INPUT_COLORS], ...data },
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
            bottomColors: [DEF_SOURCES[0], DEF_SOURCES[1], DEF_SOURCES[2]],
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
        data: { padding: '1rem', topColors: [...OUTPUT_COLORS], ...data },
    };
}

/* onConnect con color LUT y label = data.edgeLabel del source */
export type EdgeLabelProvider = (id: string) => string | undefined;

export function makeOnConnectWithColor(
    edgeType: RFEdge['type'],
    getNodeLabel: EdgeLabelProvider
) {
    return (setEdges: (updater: (eds: RFEdge[]) => RFEdge[]) => void) =>
        (conn: Connection) => {
            const S = (conn.sourceHandle as string) ?? '';
            const T = (conn.targetHandle as string) ?? '';
            const stroke = resolveEdgeHex(S, T) ?? '#FF00FF';
            const label =
                (getNodeLabel(String(conn.source)) || '').trim() || undefined;

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

/* Sets exportados para validación en nodos */
export const ASC_COLOR_SETS = { INPUT_SET, DEF_A_SET, DEF_B_SET, OUTPUT_SET };
