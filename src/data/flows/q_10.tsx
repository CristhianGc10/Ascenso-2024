import {
    makeDefaultNode,
    makeInputNode,
    makeOutputNode,
} from '../../flowkit/molds';

import type { FlowSchema } from './types';

const i1 = makeInputNode(
    'i1',
    { x: 0, y: 0 },
    {
        content: (
            <>
                {' '}
                <p>
                    {' '}
                    <strong>Competencia:</strong> Escribe diversos tipos de
                    textos en su lengua materna
                </p>
            </>
        ),
        textAlign: 'center',
        edgeLabelSides: {
            bottom: ['', 'exige adecuar el texto a un proposito', ''],
        },
    }
);
i1.style = { width: 320 };

const d1 = makeDefaultNode(
    'd1',
    { x: 60, y: 180 },
    {
        content: (
            <>
                <p>
                    {' '}
                    <strong>Capacidad:</strong> Adecúa el texto a la situación
                    comunicativa considerand el propósito comunicativo y el
                    destinatario
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['', 'implica mantener el tema sin desviarse', ''],
        },
    }
);
d1.style = { width: 200 };

const d2 = makeDefaultNode(
    'd2',
    { x: 35.5, y: 380 },
    {
        content: (
            <>
                <p>
                    <strong>Criterio: </strong>Para mantener la coherencia, el
                    texto debe centrarse en el propósito de la comunicación,
                    evitando información que se aparte del tema principal
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: [
                'se vulnera cuando aparece',
                '',
                'se vulnera cuando el estudiante',
            ],
        },
    }
);
d2.style = { width: 250 };

const o1 = makeOutputNode(
    'o1',
    { x: 55, y: 620 },
    {
        content: (
            <>
                <p>
                    <strong>Aplicación Opción "b": </strong>Pedir a los
                    estudiantes que 1 indiquen el propósito y 2 relean para{' '}
                    <strong>evaluar</strong> si la anécdota el desvío
                    "contribuye con dicho propósito" es la acción adecuada.
                    Fomenta que el propio estudiante "se distancie" y
                    "reflexione" sobre la coherencia y adecuación de su texto.
                </p>
            </>
        ),
        textAlign: 'justify',
    }
);
o1.style = { width: 210 };

const d3 = makeDefaultNode(
    'd3',
    { x: 35.5, y: 380 },
    {
        content: (
            <>
                <p>
                    <strong>Capacidad complementaria: </strong>Refleciona y
                    evalúa la forma, el contenido y el contexto del texto ecrito
                    para decidir qué información conservar, modificar o eliminar
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['', 'se concreta en la acción docente que', ''],
        },
    }
);
d3.style = { width: 250 };

const o2 = makeOutputNode(
    'o2',
    { x: 55, y: 620 },
    {
        content: (
            <>
                <p>
                    <strong>Aplicación: </strong>Al pedir que los estudiantes
                    indiquen el propósito de su carta y relean el texto para
                    decidir si la anécdota de la gatita contribuye a ese
                    propósito, la docente los lleva a contrastar cada idea con
                    el objetivo de solicitar ayuda para el albergue, a reconocer
                    la anécdota como posible disgresión y a ajustar el contenido
                    para mantener la coherencia del texto; las otras acciones no
                    activann este análisis directo entre propósito y pertinencia
                    de la información
                </p>
            </>
        ),
        textAlign: 'justify',
    }
);
o2.style = { width: 210 };

export const Q10_FLOW: FlowSchema = {
    id: 'q_10',
    title: '',
    nodes: [i1, d1, d2, d3, o1, o2],
    edges: [],
};
