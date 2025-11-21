// src/data/questions/index.tsx

import type { FlowId } from '../flows'; // ← NUEVO
import type React from 'react';
import type { StemBlockId } from '../stems';
import block_11_12 from './block_11_12';
import block_13_14 from './block_13_14';
import block_15_16 from './block_15_16';
import block_17_19 from './block_17_19';
import block_1_3 from './block_1_3';
import block_20_23 from './block_20_23';
import block_24_25 from './block_24_25';
import block_26_28 from './block_26_28';
import block_29_30 from './block_29_30';
import block_31 from './block_31';
import block_32_33 from './block_32_33';
import block_34_35 from './block_34_35';
import block_36_38 from './block_36_38';
import block_39_45 from './block_39_45';
import block_46_48 from './block_46_48';
import block_49_52 from './block_49_52';
import block_4_7 from './block_4_7';
import block_53_54 from './block_53_54';
import block_55_56 from './block_55_56';
import block_57_58 from './block_57_58';
import block_59_60 from './block_59_60';
import block_8_10 from './block_8_10';
import { correctMap } from '../correct';

export type OptionKey = 'a' | 'b' | 'c';

export type Question = {
    id: number;
    stemBlockId?: StemBlockId;
    stem?: string | React.ReactNode;
    text: React.ReactNode;
    options: Record<OptionKey, string>;
    explanations: Record<OptionKey, { text: string }>;
    correct?: OptionKey;
    flowId?: FlowId; // ← aquí ya sí existe FlowId
};

const base: Question[] = [
    ...block_1_3,
    ...block_4_7,
    ...block_8_10,
    ...block_11_12,
    ...block_13_14,
    ...block_15_16,
    ...block_17_19,
    ...block_20_23,
    ...block_24_25,
    ...block_26_28,
    ...block_29_30,
    ...block_31,
    ...block_32_33,
    ...block_34_35,
    ...block_36_38,
    ...block_39_45,
    ...block_46_48,
    ...block_49_52,
    ...block_53_54,
    ...block_55_56,
    ...block_57_58,
    ...block_59_60,
];

export const questions: Question[] = base.map((q) => {
    const ok = correctMap[q.id];
    if (typeof q.correct !== 'undefined') return q;
    return ok ? { ...q, correct: ok } : q;
});

export type { StemBlockId };
