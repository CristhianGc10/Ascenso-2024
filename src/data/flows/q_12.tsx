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
            bottom: ['', 'define el desempeño esperado en escritura', ''],
        },
    }
);
i1.style = { width: 320 };

const d1 = makeDefaultNode(
    'd1',
    { x: 0, y: 160 },
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
            bottom: ['', 'se evalúa mediante', ''],
        },
    }
);
d1.style = { width: 330 };

const d2 = makeDefaultNode(
    'd2',
    { x: 0, y: 320 },
    {
        content: (
            <>
                <p>
                    {' '}
                    <strong>Criterio: </strong>Un texto coherente mantiene el
                    foco en el tema y el propósito, sin saltos inesperados de
                    información, disgresiones (información no pertinente),
                    reiteraciones ni contradicciones de ideas
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: [
                'exige que el estudiante',
                '',
                'permite interpretar el problema como',
            ],
        },
    }
);
d2.style = { width: 270 };

const o1 = makeOutputNode(
    'o1',
    { x: -150, y: 590 },
    {
        content: (
            <>
                <p>
                    <strong>Capacidad complementaria: </strong>Reflexiona y
                    evalúa la forma, el contenido y el contexto del texto
                    escrito para identificar problemas como el desvío del
                    propósito comunicativo y tomar decisiones de mejora
                </p>
            </>
        ),
        textAlign: 'justify',
    }
);
o1.style = { width: 210 };

const o2 = makeOutputNode(
    'o2',
    { x: 150, y: 590 },
    {
        content: (
            <>
                <p>
                    <strong>Aplicación: </strong>En la sección de
                    recomendaciones del díptico, la inclusión de una anécdota
                    extensa sobre una noticia falsa desplaza el foco desde las
                    acciones para verificar la información hacia el relato de
                    una experiencia personal; al pedir que indiquen el propósito
                    del texto y relean para decidir si es anécdota contribuye a
                    dicho propósito, el docente ayuda a reconocer que el
                    problema es un desvío del propósito comunicativo del texto,
                    más que una contradicción o una simple repetición de ideas
                </p>
            </>
        ),
        textAlign: 'justify',
    }
);
o2.style = { width: 350 };

export const Q12_FLOW: FlowSchema = {
    id: 'q_12',
    title: '',
    nodes: [i1, d1, d2, o1, o2],
    edges: [],
};
