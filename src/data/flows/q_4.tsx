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
                    <strong>Competencia:</strong> Lee diversos tipos de textos
                    escritos en su lengua materna
                </p>
            </>
        ),
        textAlign: 'center',
        edgeLabelSides: {
            bottom: ['', 'incluye', ''],
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
                    <strong>Capacidad: </strong>Reflexiona y evalúa la forma, el
                    contenido y contexto del texto
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['se concreta en', '', ''],
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
                    <strong>Desempeño: </strong>Opina sobre el contenido del
                    texto y sus valores relacionándolo con su experiencia para
                    reflexionar sobre sucesos e ideas importantes
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['define', '', ''],
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
                    <strong>Demanda de la pregunta: </strong>Identificar que no
                    solo recuerda información sino que valora las acciones de
                    los personajes, mostrando reflexión sobre el contenido del
                    cuento
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['', 'conduce a', ''],
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
                    <strong>Aplicación: </strong> Cuando Alda dice "Las
                    pulguitas fueron muy arriesgadas al defender a Noche y a
                    Luna de Cielo", el estudiante no solo recuerda el hecho,
                    sino que emite una valoración sobre la actitud de las
                    pulgas. Esta opinión sobre las acciones delos personajes
                    evidencia la capacidad de reflexionar y evaluar el contenido
                    del texto, a diferencia de los comentarios, que solo repiten
                    información o mencionan de qué trata el cuento
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
                    <strong>Ejemplo: </strong>El estudiante explica opina sobre
                    el contenido del texto, las enseñanzas y los valores, y
                    explica la intención de los recursos textuales más comunes a
                    partir de su conocimiento y experiencia
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
                    <strong>Definición: </strong>Reflexionar y evaluar supone
                    distanciarse del texto para comparar y contrastar aspectos
                    de contenido con la experiencia, emitiendo una opinión
                    personal sobre sucesos e ideas importantes del texto
                </p>
            </>
        ),
        textAlign: 'justify',
    }
);
o3.style = { width: 360 };

export const Q4_FLOW: FlowSchema = {
    id: 'q_4',
    title: '',
    nodes: [i1, d1, d2, d3, o1, o2, o3],
    edges: [],
};
