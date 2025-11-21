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
                    <strong>Enfoque:</strong> Indagación y alfabetixación
                    científica y tecnológia
                </p>
            </>
        ),
        textAlign: 'center',
        edgeLabelSides: {
            bottom: ['', 'se sustenta en', ''],
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
                    <strong>Construcción activa del conocimiento</strong> a
                    partir de la curiosidad, la observación, y el{' '}
                    <strong>cuestionamiento</strong>
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['', 'este proceso implica que los estudiantes', ''],
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
                    Expresan, dialogan e{' '}
                    <strong>intercambian sus formas de pensar</strong> el mundo
                    y las <strong>constrastan</strong> con los conocimientos
                    científicos.
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['', 'esta contrastación permite', ''],
        },
    }
);
d2.style = { width: 340 };

const d3 = makeDefaultNode(
    'd3',
    { x: -10, y: 400 },
    {
        content: (
            <>
                <p>
                    <strong>
                        Profundizar y construir nuevos conocimientos
                    </strong>{' '}
                    y resolver situaciones.
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['', 'esta pedagogía justifica la opción b porque', ''],
        },
    }
);
d3.style = { width: 340 };

const o1 = makeOutputNode(
    'o1',
    { x: -40, y: 740 },
    {
        content: (
            <>
                <p>
                    {' '}
                    <strong>Aplicación Opción "b":</strong> El docente promueve la generación de conflicto congnitivo. Al presentar tres explicaciones distintas (tía, hermano, abuela) y luego preguntar "por qué" se forman, el docente fuereza al estudiante a <strong>cuestionar</strong> sus propias ideas y <strong>contrastar</strong> las diferentes "formas de pensar" que se presentaron, lo cual es un paso fundamental para "construir nuevos conocimientos"
                </p>
            </>
        ),
        textAlign: 'justify',
    }
);
o1.style = { width: 400 };

export const Q24_FLOW: FlowSchema = {
    id: 'q_24',
    title: 'Lectura en comunicación como proceso',
    nodes: [i1, d1, d2, o1],
    edges: [],
};
