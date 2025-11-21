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
                    <strong>Capacidad:</strong> Se comunica oralmente en su
                    lengua materna; supone un proceso activo de construcción del
                    sentido de los textos orales
                </p>
            </>
        ),
        textAlign: 'center',
        edgeLabelSides: {
            bottom: [
                '',
                'enmarca cómo se construye el sentido del texto oral',
                '',
            ],
        },
    }
);
i1.style = { width: 320 };

const d1 = makeDefaultNode(
    'd1',
    { x: 60, y: 180 },
    {
        content: (
            <>
                <p>
                    {' '}
                    <strong>Capacidad:</strong> Infiere e interpreta información
                    del texto oral; relaciona información explícita e implícita
                    para deducir nueva información o completar vacíos del texto
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: [
                '',
                'proporciona el criterio para distinguir la deducción',
                '',
            ],
        },
    }
);
d1.style = { width: 200 };

const d2 = makeDefaultNode(
    'd2',
    { x: 35.5, y: 380 },
    {
        content: (
            <>
                <p>
                    <strong>Criterio: </strong> Un comentario basado en
                    deducción formula información que no está dicha literalemnte
                    en el texto, pero que se apoya en las pistas que este ofrece
                    sobre personajes, hechos y relaciones de causa-efecto
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['', 'permite leer el fragmento de la leyenda', ''],
        },
    }
);
d2.style = { width: 250 };

const d3 = makeDefaultNode(
    'd3',
    { x: 35.5, y: 380 },
    {
        content: (
            <>
                <p>
                    <strong>Diagnóstico: </strong>El texto oral presenta a los
                    animales atemorizados y obedeciendo al jaguar; a partir de
                    estas pistas se puede inferir que no se enfrentan a él
                    porque piensan que puede hacerles daño, aunque esto no se
                    afirma de manera explícita
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: [
                '',
                'lleva a identificar qué comentario añade información inferida',
                '',
            ],
        },
    }
);
d3.style = { width: 250 };

const o1 = makeOutputNode(
    'o1',
    { x: 55, y: 620 },
    {
        content: (
            <>
                <p>
                    {' '}
                    <strong>Aplicación:</strong> El comentario "Los otros
                    animales no se enfretaban al jaguar porque pensaban que este
                    les podía hacer daño" es una deducción, pues añade una causa
                    implícita basada en al información del texto; los otros
                    comentarios se limitan a repetir o valorar lo que ya se
                    dice, sin construir nueva información inferida
                </p>
            </>
        ),
        textAlign: 'justify',
    }
);
o1.style = { width: 210 };

export const Q15_FLOW: FlowSchema = {
    id: 'q_15',
    title: '',
    nodes: [i1, d1, d2, d3, o1],
    edges: [],
};
