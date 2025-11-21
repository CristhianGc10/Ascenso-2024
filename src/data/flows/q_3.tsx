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
                    <strong>Capacidad: </strong>Infiere e interpreta información
                    del texto
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
                    <strong>Desempeño: </strong>Explica el tema y el propósito
                    del texto clasificando y sintetizando la información para
                    construir su sentido global, distinguiendo lo relevante de
                    lo complementario
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['orienta', '', ''],
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
                    <strong>Demanda de la pregunta: </strong>Elegir la secuencia
                    de preguntas docentes que ayude al estudiante a revisar el
                    texto para corregir su error al identificar el tema central,
                    apoyándose en la recurrencia de la información
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['', 'se resuelve mediante', ''],
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
                    <strong>Aplicación: </strong> La secuencia "¿Qué
                    experiencias ha tenido Angélica? ¿Cuál de ellas se menciona
                    más veces en el texto? ¿Se debe considerar esa información
                    para decir de qué tarta principalmente el texto?" guía al
                    estudiante a analizar las experiencias mencionadas, a
                    fijarse en cuál es recurrente y a usar es información para
                    reconstruir el tema centra. Este procedimiento responde al
                    desempeño de explicar el tema y el propósito a partir de
                    información relevante y recurrente del texto, por lo que es
                    la opción que mejor ayuda a corregir el error de Tirso
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
                    <strong>Ejemplo: </strong>El estudiante explica el tema, el
                    propósito, el problema central, las enseñanzas y los valores
                    del texto, clasificando y sintetizando la información para
                    interpretar el sentido global
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
                    <strong>Definición: </strong>Infiere e interpreta al
                    establecer relaciones entre información explícita e
                    implícita para deducir nueva información y construir el
                    sentido global del texto, incluyendo su tema y propósito
                </p>
            </>
        ),
        textAlign: 'justify',
    }
);
o3.style = { width: 360 };

export const Q3_FLOW: FlowSchema = {
    id: 'q_3',
    title: '',
    nodes: [i1, d1, d2, d3, o1, o2, o3],
    edges: [],
};
