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
                    <strong>Enfoque: </strong>Construcción activa del
                    conocimiento a partir de la curiosidad, la observación y el
                    cuestionamiento
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: [
                '',
                'ubica que el aprendizaje parte de la curiosidad y el cuestionamiento',
                '',
            ],
        },
    }
);
i1.style = { width: 320 };

const d1 = makeDefaultNode(
    'd1',
    { x: 0, y: 180 },
    {
        content: (
            <>
                <p>
                    {' '}
                    <strong>Intercambio de ideas: </strong>Los estudiantes
                    exploran la realidad; expreasn, dialogan e intercambian sus
                    formas de pensar el mundo y las contrasten con los
                    conocimientos científicos
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: [
                '',
                'exige hacer visibles las propias formas de pensar',
                '',
            ],
        },
    }
);
d1.style = { width: 320 };

const d2 = makeDefaultNode(
    'd2',
    { x: 0, y: 380 },
    {
        content: (
            <>
                <p>
                    <strong>Proceso: </strong>Activación de saberes previos: el
                    docente hace aflorar las ideas que los estudiantes ya tienen
                    sobre la causa de un fenómeno antes de presentar la
                    explicación científica
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: [
                'se concreta en una pregunta abierta sobre la causa del fenómeno',
                'no implica todavía contradicción entre ideas y evidencias',
                'no solicita reflexión sobre estrategias de aprendizaje ',
            ],
        },
    }
);
d2.style = { width: 320 };

const d3 = makeDefaultNode(
    'd3',
    { x: 0, y: 570 },
    {
        content: (
            <>
                <p>
                    <strong>Acción: </strong>Pregunta ¿A qué se debe la
                    formación de burbujas en el fondo de la tetera? para que los
                    estudiantes expliquen con sus propias ideas la causa
                    observada
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['', 'opera como activación de saberes previos', ''],
        },
    }
);
d3.style = { width: 320 };

const o1 = makeOutputNode(
    'o1',
    { x: 0, y: 800 },
    {
        content: (
            <>
                <p>
                    {' '}
                    <strong>Aplicación: </strong>La pregunta funciona como
                    momento de activación de saberes previos sobre el hervido
                    del agua y las burbujas, previo a contrastarlos con la
                    explicación científica; no introduce aún evidencia que
                    contradiga sus ideas ni les pide revisar sus estrategias de
                    aprendizaje
                </p>
            </>
        ),
        textAlign: 'justify',
    }
);
o1.style = { width: 320 };

const o2 = makeOutputNode(
    'o2',
    { x: 0, y: 800 },
    {
        content: (
            <>
                <p>
                    {' '}
                    <strong>Distractor "B": </strong>La generación de conflicto
                    cognitivo se da cuando la nueva información o evidencia
                    contradice directamente las ideas previas; aquí solo se está
                    recogiendo lo que los estudiantes piensan sobre le fenómeno
                </p>
            </>
        ),
        textAlign: 'justify',
    }
);
o2.style = { width: 320 };

const o3 = makeOutputNode(
    'o3',
    { x: 0, y: 800 },
    {
        content: (
            <>
                <p>
                    {' '}
                    <strong>Distractor "C": </strong>La metacognición se vincula
                    a reflexionar acerca de lo que sabe y de cómo ha llegado a
                    saberlo; la pregunta ni pide anlizar el propio proceso de
                    aprender, solo responder qué creen que ocurre
                </p>
            </>
        ),
        textAlign: 'justify',
    }
);
o3.style = { width: 320 };

export const Q18_FLOW: FlowSchema = {
    id: 'q_18',
    title: '',
    nodes: [i1, d1, d2, d3, o1, o2, o3],
    edges: [],
};
