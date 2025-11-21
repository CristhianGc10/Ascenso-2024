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
                    <strong>Capacidad: </strong>Reflexiona evalúa la forma, el
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
                    <strong>Desempeño: </strong>Opina acerca del contenido del
                    texto y explica el sentido de recursos textuales,
                    justificando sus preferencias cuando elige o recomienda
                    textos, con el fin de reflexionar sobre los textos que lee
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
                    <strong>Demanda de la pregunta: </strong>Determinar la
                    acción pedagogíca que promueve que los estudiantes tomen
                    posición sobre el cuento y reflexionen sobre su contenido y
                    efecto en otros lectores
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['', 'se realiza mediante', ''],
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
                    <strong>Aplicación: </strong> Al solicitar que los
                    estudiantes escriban recomendaciones para animar a otros
                    compañeros a leer el cuento y luego intercambien sus
                    recomendaciones para sugerir mejoras, la docente los lleva a
                    pensar qué aspectos del contenido del cuento son valiosos,
                    cómo presentarlos a otros y por qué vale la pena leerlo.
                    Esto supone opinar sobre el contenido y el efecto del texto
                    en los lectores
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
                    <strong>Ejemplo: </strong>El estudiante opina acerca del
                    contenido del texto y justifica sus preferencias cuando
                    elige o recomienda textos según sus necesidades, intereses y
                    su relación con otros textos, con el fin de reflexionar
                    sobre lo que lee
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
                    comparar y contrastar aspectos formales y de contenido con
                    la experiencia y otras fuentes, emitiendo una opinión
                    personal sobre los textos y sus efectos en los lectores
                </p>
            </>
        ),
        textAlign: 'justify',
    }
);
o3.style = { width: 360 };

export const Q7_FLOW: FlowSchema = {
    id: 'q_7',
    title: '',
    nodes: [i1, d1, d2, d3, o1, o2, o3],
    edges: [],
};
