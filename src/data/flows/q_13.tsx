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
                    lengua materna; interacción dinámica entre interlocutores
                    para expresar y comprender ideas y emociones
                </p>
            </>
        ),
        textAlign: 'center',
        edgeLabelSides: {
            bottom: ['', 'define el marco genreal de la expresión oral', ''],
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
                    <strong>Capacidad:</strong> Adecúa, organiza y desarrolla
                    las ideas de forma coherente y cohesionada; expresa ideas en
                    torno a un tema de forma lógica y las relaciona con recursos
                    cohesivos
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['', 'establece el foco de evaluación del texto oral', ''],
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
                    <strong>Criterio: </strong> La calidad del texto oral se
                    aprecia en la claridad de la organización temática y en la
                    continuidad del hilo de ideas, no en aspectos aislados como
                    muletillas o léxico impreciso
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: [
                '',
                'sirve para analizar la producción de la estudiante',
                '',
            ],
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
                    <strong>Diagnóstico: </strong> La estudiante reitera ideas
                    sobre el taller (es divertido, juegan mucho, hace
                    personajes) sin orden ni jerarquía clara, lo que dificulta
                    mantener la progresión temática
                </p>
            </>
        ),
        textAlign: 'justify',
        edgeLabelSides: {
            bottom: ['', 'conduce al aspecto que debe retroalimentarse', ''],
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
                    <strong>Aplicación:</strong> El aspecto a priorizar es la
                    limitada progresión de ideas, porque reorganizar y
                    desarrollar las ideas según un orden lógico permite lograr
                    la coherencia y continuidad exigidas por la competencia; las
                    muletillas y el léxico impreciso son secundarios frente al
                    problema central de organización de ideas
                </p>
            </>
        ),
        textAlign: 'justify',
    }
);
o1.style = { width: 210 };

export const Q13_FLOW: FlowSchema = {
    id: 'q_13',
    title: '',
    nodes: [i1, d1, d2, d3, o1],
    edges: [],
};
