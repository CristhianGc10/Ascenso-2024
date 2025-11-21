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
            bottom: ['', 'se concreta en', ''],
        },
    }
);
i1.style = { width: 300 };

const d1 = makeDefaultNode(
    'd1',
    { x: 20, y: 150 },
    {
        content: (
            <>
                <p>
                    <strong>Capacidad: </strong> Infiere e interpreta
                    información del texto
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['se operacionaliza como', '', ''],
        },
    }
);
d1.style = { width: 260 };

const d2 = makeDefaultNode(
    'd2',
    { x: -160, y: 320 },
    {
        content: (
            <>
                <p>
                    {' '}
                    <strong>Desempeño: </strong>Establece relaciones entre
                    información explícita e implícita para deducir nueva
                    información o completar vacíos del texto
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['orienta', '', ''],
        },
    }
);
d2.style = { width: 240 };

const d3 = makeDefaultNode(
    'd3',
    { x: -450, y: 560 },
    {
        content: (
            <>
                <p>
                    {' '}
                    <strong>Demanda de la pregunta: </strong>Identificar el
                    comentario que deduce información no dicha literalmente
                    sobre el dominio de Angélica en el parataekwondo
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['', 'se resuelve', ''],
        },
    }
);
d3.style = { width: 300 };

const o1 = makeOutputNode(
    'o1',
    { x: -450, y: 780 },
    {
        content: (
            <>
                <p>
                    <strong>Aplicación: </strong>El estudiante que deduce es
                    quien, a partir de los logros y reconocimientos de Angélica,
                    concluye que gracias a su talento y esfuerzo ha ido
                    mostrando un gran dominio del parataekwondo (Julia). Esta
                    conclusión no aparece escrita literalmente, pero se infiere
                    de la trayextoria presentada en el texto, por lo que
                    evidencia la capacidad ed inferir e interpretar información
                    del texto
                </p>
            </>
        ),
        textAlign: 'justify',
    }
);
o1.style = { width: 300 };

const o2 = makeOutputNode(
    'o2',
    { x: -16, y: 540 },
    {
        content: (
            <>
                <p>
                    <strong>Ejemplo: </strong>El estudiante deduce
                    características implícitas de personajes y establece
                    relaciones lógicas como causa-efecto y eseñanza a partir de
                    información relevante explícita e implícita
                </p>
            </>
        ),
        textAlign: 'justify',
    }
);
o2.style = { width: 260 };

const o3 = makeOutputNode(
    'o3',
    { x: 200, y: 300 },
    {
        content: (
            <>
                <p>
                    <strong>Definición: </strong>Inferior e interpretar implica
                    construir el sentido del texto al relacionar información
                    explícita e implícita para explicar aspectos no dichos
                    directamente (por ejemplo, capacidades o cualidades de
                    personajes)
                </p>
            </>
        ),
        textAlign: 'justify',
    }
);
o3.style = { width: 300 };

export const Q1_FLOW: FlowSchema = {
    id: 'q_1',
    title: '',
    nodes: [i1, d1, d2, d3, o1, o2, o3],
    edges: [],
};
