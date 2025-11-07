import { MarkerType, Position } from '@xyflow/react';

import type { FlowRegistry } from './types';

export const builtinFlows: FlowRegistry = {
    'demo-horizontal': {
        id: 'demo-horizontal',
        title: 'Demo horizontal',
        nodes: [
            {
                id: 'horizontal-1',
                type: 'input',
                data: { label: 'Hola Hola Holasakhdjsahd ssndsds jdasdinauds snsdisjdssjadjaso doasjdasojdoasbda' },
                position: { x: 0, y: 80 },
                sourcePosition: Position.Right,
            },
            {
                id: 'horizontal-2',
                data: { label: 'A Node' },
                position: { x: 250, y: 0 },
                sourcePosition: Position.Right,
                targetPosition: Position.Left,
            },
            {
                id: 'horizontal-3',
                data: { label: 'Node 3' },
                position: { x: 250, y: 160 },
                sourcePosition: Position.Right,
                targetPosition: Position.Left,
            },
            {
                id: 'horizontal-4',
                data: { label: 'Node 4' },
                position: { x: 500, y: 0 },
                sourcePosition: Position.Right,
                targetPosition: Position.Left,
            },
            {
                id: 'horizontal-5',
                data: { label: 'Node 5' },
                position: { x: 500, y: 100 },
                sourcePosition: Position.Top,
                targetPosition: Position.Bottom,
            },
            {
                id: 'horizontal-6',
                data: { label: 'Node 6' },
                position: { x: 500, y: 230 },
                sourcePosition: Position.Bottom,
                targetPosition: Position.Top,
            },
            {
                id: 'horizontal-7',
                data: { label: 'Node 7' },
                position: { x: 750, y: 50 },
                sourcePosition: Position.Right,
                targetPosition: Position.Left,
            },
            {
                id: 'horizontal-8',
                data: { label: 'Node 8' },
                position: { x: 750, y: 300 },
                sourcePosition: Position.Right,
                targetPosition: Position.Left,
            },
        ],
        edges: [
            {
                id: 'horizontal-e1-2',
                source: 'horizontal-1',
                target: 'horizontal-2',
                type: 'smoothstep',
                animated: true,
            },
            {
                id: 'horizontal-e1-3',
                source: 'horizontal-1',
                target: 'horizontal-3',
                type: 'smoothstep',
                animated: true,
            },
            {
                id: 'horizontal-e1-4',
                source: 'horizontal-2',
                target: 'horizontal-4',
                type: 'smoothstep',
                label: 'edge label',
            },
            {
                id: 'horizontal-e3-5',
                source: 'horizontal-3',
                target: 'horizontal-5',
                type: 'smoothstep',
                animated: true,
            },
            {
                id: 'horizontal-e3-6',
                source: 'horizontal-3',
                target: 'horizontal-6',
                type: 'smoothstep',
                animated: true,
            },
            {
                id: 'horizontal-e5-7',
                source: 'horizontal-5',
                target: 'horizontal-7',
                type: 'smoothstep',
                animated: true,
            },
            {
                id: 'horizontal-e6-8',
                source: 'horizontal-6',
                target: 'horizontal-8',
                type: 'smoothstep',
                animated: true,
            },
        ],
        viewport: { x: 0, y: 0, zoom: 1 },
    },
    // Reutilizable para preguntas 1–3
    'grp-1-3': {
        id: 'grp-1-3',
        title: 'Situación 1–3',
        nodes: [
            {
                id: 'c',
                type: 'input',
                position: { x: 0, y: 0 },
                data: { label: 'Contexto' },
            },
            {
                id: 'a',
                position: { x: -160, y: 120 },
                data: { label: 'Dato A' },
            },
            {
                id: 'b',
                position: { x: 160, y: 120 },
                data: { label: 'Dato B' },
            },
            {
                id: 'r',
                type: 'output',
                position: { x: 0, y: 250 },
                data: { label: 'Conclusión' },
            },
        ],
        edges: [
            {
                id: 'e1',
                source: 'c',
                target: 'a',
                markerEnd: { type: MarkerType.ArrowClosed },
            },
            {
                id: 'e2',
                source: 'c',
                target: 'b',
                markerEnd: { type: MarkerType.ArrowClosed },
            },
            {
                id: 'e3',
                source: 'a',
                target: 'r',
                markerEnd: { type: MarkerType.ArrowClosed },
            },
            {
                id: 'e4',
                source: 'b',
                target: 'r',
                markerEnd: { type: MarkerType.ArrowClosed },
            },
        ],
        viewport: { x: 0, y: 0, zoom: 1 },
    },

    // Reutilizable para preguntas 4–7
    'grp-4-7': {
        id: 'grp-4-7',
        title: 'Cadena causa-efecto',
        nodes: [
            {
                id: 'i',
                type: 'input',
                position: { x: 0, y: 0 },
                data: { label: 'Inicio' },
            },
            { id: 'p1', position: { x: 180, y: 0 }, data: { label: 'Paso 1' } },
            { id: 'p2', position: { x: 360, y: 0 }, data: { label: 'Paso 2' } },
            {
                id: 'o',
                type: 'output',
                position: { x: 540, y: 0 },
                data: { label: 'Resultado' },
            },
        ],
        edges: [
            {
                id: 'e1',
                source: 'i',
                target: 'p1',
                animated: true,
                markerEnd: { type: MarkerType.ArrowClosed },
            },
            {
                id: 'e2',
                source: 'p1',
                target: 'p2',
                animated: true,
                markerEnd: { type: MarkerType.ArrowClosed },
            },
            {
                id: 'e3',
                source: 'p2',
                target: 'o',
                animated: true,
                markerEnd: { type: MarkerType.ArrowClosed },
            },
        ],
        viewport: { x: 0, y: 0, zoom: 1 },
    },

    // Esquema individual
    'single-analisis': {
        id: 'single-analisis',
        title: 'Análisis puntual',
        nodes: [
            {
                id: 'dato',
                type: 'input',
                position: { x: 0, y: 0 },
                data: { label: 'Dato' },
            },
            {
                id: 'regla',
                position: { x: 0, y: 130 },
                data: { label: 'Regla' },
            },
            {
                id: 'sol',
                type: 'output',
                position: { x: 0, y: 260 },
                data: { label: 'Solución' },
            },
        ],
        edges: [
            {
                id: 'e1',
                source: 'dato',
                target: 'regla',
                markerEnd: { type: MarkerType.ArrowClosed },
            },
            {
                id: 'e2',
                source: 'regla',
                target: 'sol',
                markerEnd: { type: MarkerType.ArrowClosed },
            },
        ],
        viewport: { x: 0, y: 0, zoom: 1 },
    },
};
