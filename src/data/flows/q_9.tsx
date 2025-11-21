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
            bottom: ['', 'define el logro en escritura', ''],
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
                    <strong>Capacidad: </strong>Organiza y desarrolla las ideas
                    de forma coherente y cohesionada
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['', 'se concreta en', ''],
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
                    <strong>Criterio: </strong>El texto coherente ordena las
                    ideas en torno a un tema y las desarrolla para ampliar la
                    información, sin contradicciones, reiteraciones innecesarias
                    ni disgresiones, estableciendo relaciones como adición,
                    causa-efecto y consecuencia entre ellas
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['se evalúa considerando', '', 'orienta la revisión hacia'],
        },
    }
);
d2.style = { width: 300 };

const o1 = makeOutputNode(
    'o1',
    { x: -16, y: 550 },
    {
        content: (
            <>
                <p>
                    <strong>Evaluación: </strong> Se consideran vicios como
                    saltos inesperados de información, disgresiones (información
                    no pertinente), reiteración y contradicción de ideas, así
                    como vacíos de información
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
                    <strong>Aplicación: </strong>En la carta de los estudiantes
                    el pedido está planteado, pero las razones que lo sustentan
                    son generales y poco desarrolladas, lo que muestra un
                    problema en el desarrollo de las ideas centrales; por ello,
                    la docente debe priorizar la falta de desarrollo de los
                    argumentos para lograr un texto coherente y persuasivo, más
                    allá de ajustes de léxico o de la variedad de conectores
                </p>
            </>
        ),
        textAlign: 'justify',
    }
);
o2.style = { width: 360 };

export const Q9_FLOW: FlowSchema = {
    id: 'q_9',
    title: '',
    nodes: [i1, d1, d2, o1, o2],
    edges: [],
};
