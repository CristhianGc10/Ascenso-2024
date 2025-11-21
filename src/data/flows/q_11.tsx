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
            bottom: ['', 'se manifiesta en', ''],
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
                    <strong>Capacidad:</strong> Organiza y desarrolla las ideas
                    de forma coherente y cohesionada
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['', 'orienta', ''],
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
                    {' '}
                    <strong>Criterio: </strong>El estudiante selecciona y
                    organiza solo aquellos aspectos que aportan al desarrollo
                    del tema central del texto, evitando información que se
                    aleje de dicho tema
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: [
                'requiere  procesos de',
                '',
                'fundamenta la acción pedagógica que',
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
                    <strong>Capacidad complementaria: </strong>Reflexiona y
                    evalúa la forma, el contenido y el contexto del texto
                    escrito también en la etapa de planificación, para decidir
                    qué información conservar, reformular o suprimir
                </p>
            </>
        ),
        textAlign: 'justify',
    }
);
o1.style = { width: 210 };

const o2 = makeOutputNode(
    'o2',
    { x: 55, y: 620 },
    {
        content: (
            <>
                <p>
                    <strong>Aplicación: </strong>Al preguntar por qué han
                    incluido, por ejemplo, los aspectos sobre los pueblos
                    aimaras y en qué medida ayudan a desarrollar el tema del
                    charqui y los platos que lo usan, la docente promueve que
                    los estudiantes evalúen la pertinencia de cada aspecto
                    respecto del tema central y, sobre esa base, reelaboren su
                    plan; esta acción desarrolla la organización y depuración de
                    ideas del plan de escritura, en coherencia con el propósito
                    de la infografía
                </p>
            </>
        ),
        textAlign: 'justify',
    }
);
o2.style = { width: 210 };

export const Q11_FLOW: FlowSchema = {
    id: 'q_11',
    title: '',
    nodes: [i1, d1, d2, o1, o2],
    edges: [],
};
