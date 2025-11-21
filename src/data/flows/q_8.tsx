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
            bottom: ['', 'enmarca la producción escrita', ''],
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
                    <strong>Capacidad: </strong>Adecúa el texto a a situación
                    comunicativa considerando el propósito comunicativo y el
                    destinatario
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: [
                'se operacionaliza en',
                '',
                'se diferencia de otros procesos como',
            ],
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
                    <strong>Criterio: </strong>El estudiante adecua el texto al
                    propósito comunicativo y al adestinatario para seleccionar y
                    organizar la información que incluirá en su escrito
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['', 'justifica que la recomendación adecuada sea', ''],
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
                    <strong>Aplicación: </strong> La recomendación "Tengan claro
                    a quiénes estarán dirigidas las cartas..." lleva a que el
                    estudiante identifique al destinatario y vincule su pedido
                    con ese propósito comunicativo antes de escribir, lo que
                    corresponde a la planificación del texto; en cambio,
                    verificar el uso del punto o implementar mejoras
                    ortográficas son acciones propias de la etapa de correción
                    del texto ya producido, no del proceso inicial de
                    planificación
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
                    <strong>Capacida complementaria: </strong>Utiliza
                    convenciones del lenguaje escrito (puntuación y ortografía)
                    de forma pertinente en la revisión del texto
                </p>
            </>
        ),
        textAlign: 'justify',
    }
);
o2.style = { width: 360 };

export const Q8_FLOW: FlowSchema = {
    id: 'q_8',
    title: '',
    nodes: [i1, d1, d2, o1, o2],
    edges: [],
};
