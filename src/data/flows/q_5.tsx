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
            bottom: ['', 'se despliega como', ''],
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
            bottom: ['se operacionaliza en', '', ''],
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
                    <strong>Desempeño: </strong>Deduce características
                    implícitas de personajes y determina el significado de
                    palabras y expresiones según el contexto, incluso cuando
                    tienen sentido figurado
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
                    <strong>Demanda de la pregunta: </strong>Seleccionar la
                    pregunta que haga que el estudiante relacione lo dicho en el
                    cuento con el contexto para inferir a qué se refiere la
                    expresión "¡Vuelvan a casa!"
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
                    <strong>Aplicación: </strong> La pregunta "¿A qué se refiere
                    Luna cuando le dice a las pulgas: Vuelvan a casa?" obliga al
                    estudiante a releer el cuento y a relacionar la palabra
                    "casa" con el lugar donde viven habitualmente las pulgas, es
                    decir, a deducir un significado implícito a partir del
                    contexto
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
                    <strong>Ejemplo: </strong>El estudiante determina el
                    significado de palabras y expresiones con sentido figurado y
                    establece relaciones lógicas como causa-efecto
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
                    <strong>Definición: </strong>Infiere e interpreta cuando
                    establece relaciones entre información explícita e implícita
                    para deducir nueva información o completar vacíos del texto,
                    incluyendo el significado de palabras y expresiones según el
                    contexto
                </p>
            </>
        ),
        textAlign: 'justify',
    }
);
o3.style = { width: 360 };

export const Q5_FLOW: FlowSchema = {
    id: 'q_5',
    title: '',
    nodes: [i1, d1, d2, d3, o1, o2, o3],
    edges: [],
};
