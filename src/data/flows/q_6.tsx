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
                    <strong>Marco del nivel:</strong> En la Educación Primaria,
                    el acceso cada vez mayor a la información desarrolla mayor
                    conciencia de su aprendizaje y capacidad de examinar sus
                    propias acciones e intenciones, con estrategias de
                    autorregulación más consolidadas
                </p>
            </>
        ),
        textAlign: 'center',
        edgeLabelSides: {
            bottom: ['fundamenta', '', ''],
        },
    }
);
i1.style = { width: 280 };

const d1 = makeDefaultNode(
    'd1',
    { x: 34, y: 180 },
    {
        content: (
            <>
                <p>
                    <strong>Proceso: </strong>Reflexionar sobre cómo se aprende
                    y qué estrategias se usan para comprender textos (releer,
                    descartar, hipótesis, usar el contexto)
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['', 'se articula con', ''],
        },
    }
);
d1.style = { width: 300 };

const d2 = makeDefaultNode(
    'd2',
    { x: -19, y: 410 },
    {
        content: (
            <>
                <p>
                    {' '}
                    <strong>Capacidad: </strong>Reflexiona y evalúa la forma, el
                    contenido y contexto, distanciándose de él para analizarlo y
                    emitir una opinión sobre su propia comprensión
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['orienta la interpretación de', '', ''],
        },
    }
);
d2.style = { width: 300 };

const d3 = makeDefaultNode(
    'd3',
    { x: -19, y: 410 },
    {
        content: (
            <>
                <p>
                    {' '}
                    <strong>Demanda de la pregunta: </strong>Identificar el
                    proceso en el que el estudiante toma consiencia de que no
                    entendió, describe las estrategias que usó (volver a leer,
                    descartar opciones) y reconoce que así logró comprender
                    mejor
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['', 'se concreta en', ''],
        },
    }
);
d3.style = { width: 300 };

const o1 = makeOutputNode(
    'o1',
    { x: -16, y: 550 },
    {
        content: (
            <>
                <p>
                    <strong>Aplicación: </strong> En su intervención, el
                    estudiante explica que al inicio no entendió quién dijo,
                    "¡Cielo, tu comida!", reconoce su confusión, decide volver a
                    leer, analiza quiénes podrían decir esa frase y concluye que
                    debe ser el dueño o dueña de Cielo. Al describir y valorar
                    sus propias estrategias de lextura, muestra metacognición
                    sobre las estrategias de aprendizaje
                </p>
            </>
        ),
        textAlign: 'justify',
    }
);
o1.style = { width: 360 };

const o2 = makeOutputNode(
    'o2',
    { x: -16, y: 550 },
    {
        content: (
            <>
                <p>
                    <strong>Definición: </strong>La metacognición implica que el
                    estudiante se distancie del texto y de su propio proceso
                    para evaluar cómo está comprendiendo y qué estrategias
                    utiliza, tomando decisiones para mejorar su comprensión
                </p>
            </>
        ),
        textAlign: 'justify',
    }
);
o2.style = { width: 360 };

const o3 = makeOutputNode(
    'o3',
    { x: -16, y: 550 },
    {
        content: (
            <>
                <p>
                    <strong>Ejemplo: </strong>En esta etapa los estudiantes
                    desarrollan mayor consiencia de su aprendizaje y capacidad
                    de examinar sus propias acciones e intenciones, usando
                    estrategias de autorregulación para afrontar situaciones de
                    aprendizaje
                </p>
            </>
        ),
        textAlign: 'justify',
    }
);
o3.style = { width: 360 };

export const Q6_FLOW: FlowSchema = {
    id: 'q_6',
    title: '',
    nodes: [i1, d1, d2, d3, o1, o2, o3],
    edges: [],
};
