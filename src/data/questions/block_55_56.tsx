import type { Question } from './index';

const block_55_56: Question[] = [
    {
        id: 55,
        stemBlockId: '55-56',
        text: (
            <>
                ¿Cuál es el propósito{' '}
                <strong>
                    <u>principal</u>
                </strong>{' '}
                de las intervenciones del docente?
            </>
        ),
        options: {
            a: 'Brindar andamiaje sobre cómo elaborar la plantilla de una forma tridimensional.',
            b: 'Recoger saberes previos sobre cómo elaborar la plantilla de una forma tridimensional.',
            c: 'Generar conflicto cognitivo sobre cómo elaborar la plantilla de una forma tridimensional.',
        },
        explanations: {
            a: {
                text: 'Es correcta porque las preguntas de la docente llevan al “ah, ya entendí” del alumno; eso es andamiaje: guiar con preguntas para que él construya el procedimiento (plantilla de cubo).',
            },
            b: {
                text: 'Es incorrecta porque aunque hubo confusión inicial, el propósito central de la intervención no fue crear conflicto, sino acompañar hasta la comprensión.',
            },
            c: {
                text: 'Es incorrecta porque no solo se recogieron saberes; se transformaron en un método mediante la guía de la docente.',
            },
        },
    },
    {
        id: 56,
        stemBlockId: '55-56',
        text: (
            <>
                ¿Cuál de los siguientes aprendizajes se evidencia en la{' '}
                <strong>
                    <u>última intervención</u>
                </strong>{' '}
                de Aldo?
            </>
        ),
        options: {
            a: 'Describe formas bidimensionales al elaborar la plantilla de una forma tridimensional.',
            b: 'Justifica sus procedimientos al elaborar la plantilla de una forma tridimensional.',
            c: 'Diseña una estrategia para elaborar la plantilla de una forma tridimensional.',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque no se limita a “describir formas planas” aisladas; articula cómo combinarlas para lograr la plantilla.',
            },
            b: {
                text: 'Es incorrecta porque no justifica con fundamentos externos; más bien diseña y explica una estrategia (el “cómo” lograrla).',
            },
            c: {
                text: 'Es correcta porque propone una estrategia paso a paso (rectángulo en cuatro, bases como cuadrados, forma de “T”) para elaborar la plantilla.',
            },
        },
    },
];

export default block_55_56;
