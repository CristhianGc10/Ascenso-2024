import type { FlowDefinition, FlowRegistry } from './types';

import { builtinFlows } from './registry';

const LS_KEY = 'app.flows.v1';

function clone<T>(x: T): T {
    return JSON.parse(JSON.stringify(x));
}

function readUserRegistry(): FlowRegistry {
    try {
        const raw = localStorage.getItem(LS_KEY);
        if (!raw) return {};
        return JSON.parse(raw) as FlowRegistry;
    } catch {
        return {};
    }
}

function writeUserRegistry(reg: FlowRegistry) {
    localStorage.setItem(LS_KEY, JSON.stringify(reg));
}

export function getRegistry(): FlowRegistry {
    return { ...builtinFlows, ...readUserRegistry() };
}

export function listFlowIds(): string[] {
    return Object.keys(getRegistry()).sort();
}

export function getFlow(id: string): FlowDefinition | null {
    const reg = getRegistry();
    const def = reg[id];
    return def ? clone(def) : null;
}

export function upsertFlow(def: FlowDefinition) {
    const userReg = readUserRegistry();
    userReg[def.id] = def;
    writeUserRegistry(userReg);
}

export function deleteFlow(id: string) {
    const userReg = readUserRegistry();
    if (userReg[id]) {
        delete userReg[id];
        writeUserRegistry(userReg);
    }
}

export function exportAll(): string {
    const reg = getRegistry();
    return JSON.stringify(reg, null, 2);
}

export function importAll(json: string) {
    const parsed = JSON.parse(json) as FlowRegistry;
    // No sobreescribe builtin; solo guarda en user space
    const out: FlowRegistry = {};
    for (const [k, v] of Object.entries(parsed)) {
        if (!builtinFlows[k]) out[k] = v;
    }
    writeUserRegistry(out);
}
