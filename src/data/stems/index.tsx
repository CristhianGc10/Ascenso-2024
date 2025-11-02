import React from 'react';
import { stem_13_14 } from './block_13_14';
import { stem_17_19 } from './block_17_19';
import { stem_1_3 } from './block_1_3';
import { stem_24_25 } from './block_24_25';
import { stem_29_30 } from './block_29_30';
import { stem_32_33 } from './block_32_33';
import { stem_36_38 } from './block_36_38';
import { stem_46_48 } from './block_46_48';
import { stem_4_7 } from './block_4_7';
import { stem_53_54 } from './block_53_54';
import { stem_55_56 } from './block_55_56';
import { stem_57_58 } from './block_57_58';
import { stem_59_60 } from './block_59_60';
import { stem_8_10 } from './block_8_10';

export const stemsMap = {
    '1-3': stem_1_3,
    '4-7': stem_4_7,
    '8-10': stem_8_10,
    '13-14': stem_13_14,
    '17-19': stem_17_19,
    '24-25': stem_24_25,
    '29-30': stem_29_30,
    '32-33': stem_32_33,
    '36-38': stem_36_38,
    '46-48': stem_46_48,
    '53-54': stem_53_54,
    '55-56': stem_55_56,
    '57-58': stem_57_58,
    '59-60': stem_59_60,
} as const;

export type StemBlockId = keyof typeof stemsMap;
export type StemsMap = Record<StemBlockId, React.ReactNode>;
