// src/flowkit/styleMolds.ts

import type { AscData } from './AscNodes';

export type NodeMold = Partial<AscData>;

export const moldSize = (
    width: number | string,
    height: number | string
): NodeMold => ({ width, height });
export const moldPadding = (padding: number | string): NodeMold => ({
    padding,
});
export const moldTint = (tint: string): NodeMold => ({ tint });
export const moldBorder = (
    opts: {
        color?: string;
        width?: number;
        radius?: number;
        shadow?: string;
    } = {}
): NodeMold => ({
    borderColor: opts.color,
    borderWidth: opts.width,
    radius: opts.radius,
    shadow: opts.shadow,
});
export const moldText = (
    opts: {
        align?: 'left' | 'center' | 'right' | 'justify';
        size?: number | string;
        weight?: number | string;
        family?: string;
        lineHeight?: number | string;
        color?: string;
    } = {}
): NodeMold => ({
    textAlign: opts.align,
    fontSize: opts.size,
    fontWeight: opts.weight,
    fontFamily: opts.family,
    lineHeight: opts.lineHeight,
    textColor: opts.color,
});
export const moldContentBox = (
    opts: { bg?: string; padding?: number | string } = {}
): NodeMold => ({
    contentBg: opts.bg,
    contentPadding: opts.padding,
});

export function applyMolds(
    base: Partial<AscData>,
    ...molds: NodeMold[]
): Partial<AscData> {
    return Object.assign({}, base, ...molds);
}
