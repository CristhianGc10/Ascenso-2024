// src/flowkit/presets.ts

import type { Edge as RFEdge, Node as RFNode } from '@xyflow/react';
import { makeDefaultNode, makeInputNode, makeOutputNode } from './molds';

// Inputs
const i1 = makeInputNode(
    'i1',
    { x: 40, y: 40 },
    {
        content: 'Lectura en comunicación',
        textAlign: 'center',
        edgeLabelSides: { bottom: ['', '', 'es un proceso que'] },
    }
);
i1.style = { width: 180 };

const i2 = makeInputNode(
    'i2',
    { x: 700, y: 40 },
    {
        content: 'Entrada B',
        edgeLabelSides: { bottom: ['', '', ''] },
    }
);

// Defaults
const d1 = makeDefaultNode(
    'd1',
    { x: 250, y: 250 },
    {
        content:
            'Implica tomar posición frente al texto en sus distintos usos sociales en diferentes soportes y formatos',
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['', '', ''],
            right: ['', ''],
        },
    }
);
d1.style = { width: 200 };

const d2 = makeDefaultNode(
    'd2',
    { x: 0, y: 250 },
    {
        content: 'No es solo decodificación sino construcción de sentido',
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['', 'implica tres capacidades', ''],
            right: ['', ''],
        },
    }
);
d2.style = { width: 160 };

const d3 = makeDefaultNode(
    'd3',
    { x: 800, y: 500 },
    {
        content: 'aashd sdhsjah dsk dshd shd',
    }
);
d3.style = { widows: 150 };

const d4 = makeDefaultNode(
    'd4',
    { x: 800, y: 160 },
    {
        content: 'Proceso 4',
    }
);

// Outputs
const o1 = makeOutputNode(
    'o1',
    { x: 0, y: 500 },
    {
        content: (
            <>
                <p>
                    Obtiene información del <strong>texto</strong>.
                </p>

                <p style={{ textAlign: 'center' }}>Esta línea solo centrada</p>

                <p style={{ textAlign: 'justify' }}>
                    Localiza y selecciona información explícita con un propósito
                    determinado
                </p>

                <ul>
                    <li>Punto 1</li>
                    <li>Punto 2</li>
                    <li>Punto 3</li>
                </ul>

                <p>
                    Línea 1<br />
                    Línea 2 tras salto manual
                </p>
            </>
        ),
    }
);
o1.style = { width: 250 };

const o2 = makeOutputNode(
    'o2',
    { x: 150, y: 500 },
    {
        content: (
            <>
                <p>Infiere e interpreta</p>
                <ul>
                    <li>
                        Relaciona información explícita e implícita para deducir
                        nueva información
                    </li>
                    <li>
                        Explica el propósito del autor, su uso estético del
                        lenguaje y sus intenciones en el contexto sociocultural
                    </li>
                </ul>
            </>
        ),
        textAlign: 'justify',
    }
);
o2.style = { width: 250 };

const o3 = makeOutputNode(
    'o3',
    { x: 300, y: 500 },
    { content: 'Reflexiona y evalúa', textAlign: 'justify' }
);
o3.style = { width: 150 };

const imgNode = makeDefaultNode(
    'img1',
    { x: 500, y: 300 },
    {
        content: (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 8,
                }}
            >
                <img
                    src="/images/Paleta.png"
                    alt="Nodo ejemplo"
                    style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: 8,
                        objectFit: 'cover',
                    }}
                />
            </div>
        ),
        textAlign: 'center',
    }
);

// Tamaño del nodo en el lienzo
imgNode.style = { width: 220, height: 160 };

// Exporta solo nodos; conecta en el lienzo
export const DEMO_NODES: RFNode[] = [
    i1,
    i2,
    d1,
    d2,
    d3,
    d4,
    o1,
    o2,
    o3,
    imgNode,
];
export const DEMO_EDGES: RFEdge[] = [];
