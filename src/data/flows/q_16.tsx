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
                    <strong>Competencia: </strong>Explica el mundo físico
                    basándose en conocimientos sobre los seres vivos, materia y
                    energía, biodiversidad, Tierra y universo
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: [
                '',
                'delimita que se explican propiedades de la materia',
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
                    <strong>Capacidad: </strong>Comprende y usa conocimientos
                    sobre los seres vivos, materia y energía, biodiversidad,
                    Tierra y universo.
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['', 'se concreta en el desempeño sobre materia', ''],
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
                    <strong>Desempeño: </strong>Describe la materia y señala que
                    se compone de partículas pequeñas El vapor que sale del agua
                    cuando hierve es la razón por la que disminuye el volumen
                    inicial
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: [
                'ejemplifica que el vapor es agua en estado gaseoso',
                'distingue materia de energía',
                'distingue cambio de estado de componentes del aire',
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
                    <strong>Concepto: </strong>Al hervir, parte del agua líquida
                    pasa a estado gaseoso; las burbujas visibles son agua en
                    estado gaseoso, es decir, materia formada por partículas
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: [
                '',
                'permite reconocer qué respuesta describe correctamente las burbujas',
                '',
            ],
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
                    <strong>Aplicación: </strong>La abuela afirma que las
                    burbujas están hechas de agua en estado gaseoso, única
                    respuesta que reconoce que el vapor es agua que ha cambiado
                    de estado, tal como señala el desempeño
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
                    <strong>Distractor "A": </strong>Están hechas de calor
                    confunde una forma de energía con materia; el calor no
                    cumple la condición de materia que se compone de partículas
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
                    <strong>Distractor "B": </strong>Están hechas de oxígeno
                    reduce las burbujas a un gas del aire, pero el desempeño
                    ejemplifica que el vapor que sale del agua hirviendo es agua
                    transformada, no solo oxígeno
                </p>
            </>
        ),
        textAlign: 'justify',
    }
);
o3.style = { width: 320 };

export const Q16_FLOW: FlowSchema = {
    id: 'q_16',
    title: '',
    nodes: [i1, d1, d2, d3, o1, o2, o3],
    edges: [],
};
