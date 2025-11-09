// src/flowkit/LabelLayout.ts
let currentEpoch = -1;

export type Rect = { l: number; t: number; r: number; b: number };

let placed: Rect[] = [];
let obstacles: Rect[] = [];

export function beginLayout(epoch: number, obs: Rect[] = []) {
    if (epoch !== currentEpoch) {
        currentEpoch = epoch;
        obstacles = obs.slice();
        placed = obstacles.slice();
    }
}

const MARGIN = 6;

function overlaps(a: Rect, b: Rect) {
    return !(
        a.r + MARGIN <= b.l ||
        b.r + MARGIN <= a.l ||
        a.b + MARGIN <= b.t ||
        b.b + MARGIN <= a.t
    );
}

function hashId(s: string) {
    let h = 0;
    for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
    return Math.abs(h) | 0;
}

/**
 * Intenta colocar una etiqueta sobre el path en t0. Si choca, prueba t = t0 ± n*strideT.
 * - allowed(t): veta tramos de alta curvatura.
 * - edgeId: para desempate determinista en el orden de prueba.
 */
export function placeAlongPath(
    pointAt: (t: number) => { x: number; y: number },
    w: number,
    h: number,
    totalLength: number,
    t0 = 0.5,
    stridePx = 16,
    maxIter = 24,
    tMin = 0.08,
    tMax = 0.92,
    allowed?: (t: number) => boolean,
    edgeId?: string
) {
    const baseStrideT = totalLength > 0 ? stridePx / totalLength : 0.05;
    const seed = edgeId ? hashId(edgeId) : 1;
    const strideT = baseStrideT * (0.9 + ((seed % 5) / 5) * 0.2); // paso pseudo-único

    const clamp = (t: number) => Math.max(tMin, Math.min(tMax, t));

    const rectAtT = (t: number): Rect => {
        const p = pointAt(t);
        return {
            l: p.x - w / 2,
            r: p.x + w / 2,
            t: p.y - h / 2,
            b: p.y + h / 2,
        };
    };

    const fits = (t: number) => {
        if (allowed && !allowed(t)) return false;
        const R = rectAtT(t);
        for (const P of placed) if (overlaps(R, P)) return false;
        return true;
    };

    if (fits(t0)) {
        placed.push(rectAtT(t0));
        return { t: t0 };
    }

    // patrón determinista de prueba: +, -, ++, --, ... con semilla por edgeId
    const firstSign = seed % 2 ? +1 : -1;

    for (let k = 1; k <= maxIter; k++) {
        const step = k * strideT;
        const order = firstSign > 0 ? [+step, -step] : [-step, +step];
        for (const delta of order) {
            const t = clamp(t0 + delta);
            if (fits(t)) {
                placed.push(rectAtT(t));
                return { t };
            }
        }
    }

    placed.push(rectAtT(t0));
    return { t: t0 };
}
