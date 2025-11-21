// src/data/flows/index.ts

import type { FlowId, FlowSchema } from './types';

import { Q17_FLOW } from './q_17';
import { Q18_FLOW } from './q_18';
import { Q19_FLOW } from './q_19';
import { Q20_FLOW } from './q_20';
import { Q21_FLOW } from './q_21';
import { Q22_FLOW } from './q_22';
import { Q23_FLOW } from './q_23';
import { Q24_FLOW } from './q_24';

//import { Q16_FLOW } from './q_16';









//import { Q14_FLOW } from './q_14';
//import { Q15_FLOW } from './q_15';
//import { Q13_FLOW } from './q_13';
//import { Q12_FLOW } from './q_12';
//import { Q11_FLOW } from './q_11';
//import { Q10_FLOW } from './q_10';
//import { Q9_FLOW } from './q_9';
//import { Q1_FLOW } from './q_1';
//import { Q8_FLOW } from './q_8';
//import { Q7_FLOW } from './q_7';
//import { Q6_FLOW } from './q_6';
//import { Q5_FLOW } from './q_5';
//import { Q4_FLOW } from './q_4';
//import { Q3_FLOW } from './q_3';
//import { Q2_FLOW } from './q_2';

export type { FlowSchema, FlowId };

const ALL_SCHEMAS: FlowSchema[] = [
    //Q1_FLOW,
    //Q2_FLOW,
    //Q3_FLOW,
    //Q4_FLOW,
    //Q5_FLOW,
    //Q6_FLOW,
    //Q7_FLOW,
    //Q8_FLOW,
    //Q9_FLOW,
    //Q10_FLOW,
    //Q11_FLOW,
    //Q12_FLOW,
    //Q13_FLOW,
    //Q14_FLOW,
    //Q15_FLOW,
    //Q16_FLOW,
    Q17_FLOW,
    Q18_FLOW,
    Q19_FLOW,
    Q20_FLOW,
    Q21_FLOW,
    Q22_FLOW,
    Q23_FLOW,
    Q24_FLOW,
];

export const FLOW_SCHEMAS: Record<FlowId, FlowSchema> = Object.fromEntries(
    ALL_SCHEMAS.map((f) => [f.id, f])
);
