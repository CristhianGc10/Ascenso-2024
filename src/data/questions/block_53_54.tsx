import type { Question } from './index';

const block_53_54: Question[] = [
    {
        id: 53,
        stemBlockId: '53-54',
        text: <>¿Qué proceso de aprendizaje evidencia Nélida?</>,
        options: {
            a: 'Transferencia de los aprendizajes.',
            b: 'Generación de un conflicto cognitivo.',
            c: 'Metacognición sobre su proceso de aprendizaje.',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque el conflicto (“me confundo…”) ya fue superado; no es el estado final.',
            },
            b: {
                text: 'Es incorrecta porque no aplica lo aprendido a otro contexto (se mantiene en el baile).',
            },
            c: {
                text: 'Es correcta porque al decir “me di cuenta… con dibujos es más fácil” el estudiante reflexiona sobre su propio proceso, reconoce dificultades y estrategias que le funcionan: eso es metacognición.',
            },
        },
    },
    {
        id: 54,
        stemBlockId: '53-54',
        text: (
            <>
                ¿Qué logro de aprendizaje{' '}
                <strong>
                    <u>NO</u>
                </strong>{' '}
                se evidencia en las intervenciones de Hugo?
            </>
        ),
        options: {
            a: 'Plantea estrategias para identificar un patrón.',
            b: 'Predice los términos que continúan en un patrón.',
            c: 'Reconoce los elementos que se repiten en un patrón.',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque sí se ven estrategias para identificar el patrón (usar dibujos, recordar secuencias); por tanto, no es la que “no se evidencia”.',
            },
            b: {
                text: 'Es correcta porque no aparece que prediga el siguiente término; se limita a reconocer/recordar pasos ya realizados, sin anticipar el que viene.',
            },
            c: {
                text: 'Es incorrecta porque sí reconoce elementos que se repiten (levantar/bajar brazos), base del patrón; por tanto, no es la ausente.',
            },
        },
    },
];

export default block_53_54;
