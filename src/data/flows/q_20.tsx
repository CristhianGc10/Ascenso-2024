// src/data/flows/q_20.tsx

import {
    makeDefaultNode,
    makeInputNode,
    makeOutputNode,
} from '../../flowkit/molds';

import type { FlowSchema } from './types';

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

const d1 = makeDefaultNode(
    'd1',
    { x: 250, y: 250 },
    {
        content:
            'Implica tomar posición frente al texto en sus distintos usos sociales en diferentes soportes y formatos',
        textAlign: 'justify',
    }
);
d1.style = { width: 200 };

const o1 = makeOutputNode(
    'o1',
    { x: 0, y: 500 },
    {
        content: (
            <>
                <p>
                    Obtiene información del <strong>texto</strong>.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Localiza y selecciona información explícita con un propósito
                    determinado.
                </p>
            </>
        ),
    }
);
o1.style = { width: 250 };

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
                <p style={{ margin: 0, fontWeight: 600 }}>Nodo con imagen</p>
            </div>
        ),
        textAlign: 'center',
    }
);
imgNode.style = { width: 220, height: 160 };

// AQUÍ ES LO IMPORTANTE:
export const Q20_FLOW: FlowSchema = {
    id: 'q_20', // este es el ID que usarás en la pregunta: flowId: 'q_20'
    title: 'Lectura en comunicación como proceso',
    nodes: [i1, d1, o1, imgNode],
    edges: [],
};
