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
                    <strong>Capacidad: </strong> Obtiene información del texto
                    escrito
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['se evidencia en', '', ''],
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
                    <strong>Desempeño: </strong>Localiza y selecciona
                    información explícita en textos escritos con un propósito
                    específico (por ejemplo, listar datos que aparecen
                    claramente en el texto)
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
                    <strong>Demanda de la pregunta: </strong>Reconocer la acción
                    pedagógica que centra el trabajo en recuperar información
                    explícita del texto sobre los reconocimientos obtenidos por
                    Angélica
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
                    <strong>Aplicación: </strong> Cuando la docente pide
                    elaborar una lista de los reconocimientos que Angélica ha
                    obtenido en su carrera, el estudiante debe buscar y copiar
                    datos que están explícitos en el texto. Esta acción se
                    alinea directamente de obtener información del texto
                    escrito, a diferencia de escribir un nuevo relato o dialogar
                    sobre el aporte del deporte, que implican producción o
                    reflexión más allá de lo literal.
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
                    <strong>Ejemplo: </strong>El estudiante indentifica
                    información explícita relevante y complementaria que se
                    encuentra en distintas partes del texto y selecciona datos
                    específicos para una tarea determinada
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
                    <strong>Definición: </strong>Obtener información supone
                    indentificar y seleccionar información explícita (nombres,
                    fechas, hechos, reconocimientos) en función de un propósito
                    de lectura
                </p>
            </>
        ),
        textAlign: 'justify',
    }
);
o3.style = { width: 360 };

export const Q2_FLOW: FlowSchema = {
    id: 'q_2',
    title: '',
    nodes: [i1, d1, d2, d3, o1, o2, o3],
    edges: [],
};
