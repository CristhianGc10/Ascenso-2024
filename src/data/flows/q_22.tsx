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
                    <strong>Proceso Pedagógico:</strong> Activación de saberes
                    previos
                </p>
            </>
        ),
        textAlign: 'center',
        edgeLabelSides: {
            bottom: ['', 'se define según el enfoque por competencia como', ''],
        },
    }
);
i1.style = { width: 320 };

const d1 = makeDefaultNode(
    'd1',
    { x: -40, y: 170 },
    {
        content: (
            <>
                <p>
                    {' '}
                    <strong>Teoría:</strong> Este proceso consiste en recuperar
                    los conocimientos, concepciones, representaciones y{' '}
                    <strong>experiencias</strong> que los estudiantes ya poseen
                    sobre una situación o tema, vinculándolos con su{' '}
                    <strong>visa diaria</strong> y contexto.
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['', 'en la situación de aula', ''],
        },
    }
);
d1.style = { width: 400 };

const d2 = makeDefaultNode(
    'd2',
    { x: -10, y: 400 },
    {
        content: (
            <>
                <p>
                    <strong>Análisis de la Acción: </strong> El docente
                    planteaba dos preguntas:
                </p>
                <ol>
                    <li>
                        ¿Qué maquinas simples utilizamos en nuestra vida diaria?
                    </li>
                    <li>¿Cómo funcionan estas máquinas?</li>
                </ol>
                <p>
                    Estas preguntas dirigen explícitamente a los estudiantes a
                    los estudiantes a recuperar información de su contexto y
                    experiencia personal.
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['', 'esta acción es adecuada porque', ''],
        },
    }
);
d2.style = { width: 340 };

const o1 = makeOutputNode(
    'o1',
    { x: -40, y: 740 },
    {
        content: (
            <>
                <p>
                    {' '}
                    <strong>Aplicación Opción "b":</strong> La acción se centra
                    en que los estudiantes{' '}
                    <strong>
                        elaboren explicaciones sobre la base de su experiencia.
                    </strong>{' '}
                    Esto alinea perfectamente la actividad preguntas sobre la
                    vida diaria con el propósito pedagógico activar saberes
                    previos de forma directa, a diferencia de a que busca
                    reflexión metacognitiva o c que busca cuestionamiento
                    conflicto cognitivo.
                </p>
            </>
        ),
        textAlign: 'justify',
    }
);
o1.style = { width: 400 };

export const Q22_FLOW: FlowSchema = {
    id: 'q_22',
    title: 'Lectura en comunicación como proceso',
    nodes: [i1, d1, d2, o1],
    edges: [],
};
