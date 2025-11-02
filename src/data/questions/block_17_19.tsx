import type { Question } from './index';

const block_17_19: Question[] = [
    {
        id: 17,
        stemBlockId: '17-19',
        text: (
            <>
                En la situación, ¿cuál de los integrantes de la familia responde{' '}
                <strong>
                    <u>correctamente</u>
                </strong>{' '}
                la pregunta de María?
            </>
        ),
        options: {
            a: 'La tía de María.',
            b: 'El hermano de María.',
            c: 'La abuela de María.',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque el calor es energía, no material que forme burbujas.',
            },
            b: {
                text: 'Es incorrecta porque no son burbujas de oxígeno: el fenómeno es cambio de estado del agua.',
            },
            c: {
                text: 'Es correcta porque afirma que las burbujas son agua en estado gaseoso; eso describe con precisión qué se observa al hervir: vapor que se forma y asciende.',
            },
        },
    },
    {
        id: 18,
        stemBlockId: '17-19',
        text: (
            <>
                <p>
                    A partir de esta situación, el docente pregunta a los
                    estudiantes: “¿A qué se debe la formación de burbujas en el
                    fondo de la tetera?”.
                </p>
                <p>
                    ¿Qué proceso de aprendizaje busca promover{' '}
                    <strong>
                        <u>principalmente</u>
                    </strong>{' '}
                    el docente con esta pregunta?
                </p>
            </>
        ),
        options: {
            a: 'La activación de los saberes previos.',
            b: 'La generación de conflicto cognitivo.',
            c: 'La metacognición sobre las estrategias de aprendizaje.',
        },
        explanations: {
            a: {
                text: 'Es correcta porque la pregunta “¿a qué se debe…?” convoca al estudiante a explicar con lo que ya sabe antes de medir o experimentar. Es el uso típico de saberes previos.',
            },
            b: {
                text: 'Es incorrecta porque no se provoca una contradicción entre lo que cree y un dato nuevo.',
            },
            c: {
                text: 'Es incorrecta porque no se le pide comentar su propio proceso de aprendizaje.',
            },
        },
    },
    {
        id: 19,
        stemBlockId: '17-19',
        text: (
            <>
                En la situación, ¿qué propiedad física de la materia permite
                explicar que las burbujas{' '}
                <strong>
                    <u>ascienden hacia la superficie</u>
                </strong>{' '}
                del agua?
            </>
        ),
        options: {
            a: 'La densidad.',
            b: 'La solubilidad.',
            c: 'El punto de ebullición.',
        },
        explanations: {
            a: {
                text: 'Es correcta porque las burbujas suben por diferencia de densidades: el gas es menos denso que el líquido que lo rodea, así que asciende.',
            },
            b: {
                text: 'Es incorrecta porque la solubilidad trata de disolución, no del movimiento ascendente de un gas formado.',
            },
            c: {
                text: 'Es incorrecta porque el punto de ebullición indica la temperatura a la que hierve, no explica la flotación de las burbujas.',
            },
        },
    },
];

export default block_17_19;
