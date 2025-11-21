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
                    <strong>Capacidad:</strong> Se comunica oralmente en su
                    lengua materna como práctica social de interacción con
                    distintos interlocutores
                </p>
            </>
        ),
        textAlign: 'center',
        edgeLabelSides: {
            bottom: ['', 'define la oralidad como interacción con otros', ''],
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
                    <strong>Capacidad:</strong> Interactúa estratégicamente con
                    distintos interlocutores; alterna los roles de hablante y
                    oyente y participa de forma pertinente y relevante para
                    lograr su propósito comunicativo
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: [
                '',
                'orienta qué tipo de acciones fortalecen la interacción',
                '',
            ],
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
                    <strong>Criterio: </strong> Hacer preguntas y aportes que se
                    apoyan en lo que el otro dice permite profundizar, aclarar y
                    ampliar las ideas del interlocutor
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['', 'se ejemplifica en la situación de entrevista', ''],
        },
    }
);
d2.style = { width: 250 };

const d3 = makeDefaultNode(
    'd3',
    { x: 35.5, y: 380 },
    {
        content: (
            <>
                <p>
                    <strong>Diagnóstico: </strong>En una entrevista, las
                    repreguntas toman como punto de partida las respuestas de la
                    entrevistada y le permite desarrollar, precisar o ampliar
                    sus ideas
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['', 'justifica qué criterio responde al propósito', ''],
        },
    }
);
d3.style = { width: 250 };

const o1 = makeOutputNode(
    'o1',
    { x: 55, y: 620 },
    {
        content: (
            <>
                <p>
                    {' '}
                    <strong>Aplicación:</strong> Elaborar repreguntas favorece
                    directamente el desarrollo de las ideas de la entrevistada,
                    porque materializa la capacidad de interactuar
                    estratégicamente usando lo dicho por el interlocutor para
                    aclarar y complementar información; la pronunciación y el
                    vocabulario son condiciones de forma, pero no garantza por
                    sí mismas el desarrollo de ideas
                </p>
            </>
        ),
        textAlign: 'justify',
    }
);
o1.style = { width: 210 };

export const Q14_FLOW: FlowSchema = {
    id: 'q_14',
    title: '',
    nodes: [i1, d1, d2, d3, o1],
    edges: [],
};
