import type { Question } from './index';

const block_46_48: Question[] = [
    {
        id: 46,
        stemBlockId: '46-48',
        text: (
            <>
                ¿Cuál es el proceso de aprendizaje que el docente busca promover{' '}
                <strong>
                    <u>principalmente</u>
                </strong>{' '}
                con sus intervenciones?
            </>
        ),
        options: {
            a: 'Recoger saberes previos.',
            b: 'Promover el conflicto cognitivo.',
            c: 'Favorecer la transferencia de aprendizajes.',
        },
        explanations: {
            a: {
                text: 'Es correcta porque nadie está confundido ni aplicando a otro contexto; los estudiantes organizan desde lo que ya saben (fechas/tiempos), típico de saberes previos.',
            },
            b: {
                text: 'Es incorrecta porque no se expone un choque entre creencia y evidencia que fuerce a revisar lo pensado.',
            },
            c: {
                text: 'Es incorrecta porque no se traslada el aprendizaje a un nuevo contexto; siguen planificando en la misma situación.',
            },
        },
    },
    {
        id: 47,
        stemBlockId: '46-48',
        text: (
            <>
                ¿Cuál de los estudiantes emplea el conteo para medir el{' '}
                <strong>
                    <u>tiempo</u>
                </strong>
                ?
            </>
        ),
        options: {
            a: 'Rodrigo.',
            b: 'Mélani.',
            c: 'Bertha.',
        },
        explanations: {
            a: {
                text: 'Es correcta porque Rodrigo cuenta (“faltan 4 días”) y usa el número como cantidad para medir el tiempo.',
            },
            b: {
                text: 'Es incorrecta porque usar fechas (“9, 11 de agosto…”) nombra momentos; no está contando, solo identificando.',
            },
            c: {
                text: 'Es incorrecta porque ordinal sería primero/segundo/tercero; en el comentario no se establece orden posicional.',
            },
        },
    },
    {
        id: 48,
        stemBlockId: '46-48',
        text: (
            <>
                ¿Qué uso del número se evidencia en el comentario de{' '}
                <strong>
                    <u>Bertha</u>
                </strong>
                ?
            </>
        ),
        options: {
            a: 'Nominal.',
            b: 'Cardinal.',
            c: 'Ordinal.',
        },
        explanations: {
            a: {
                text: 'Es correcta porque Bertha usa fechas para nombrar días/eventos; el número funciona como etiqueta de identificación (uso nominal), no para contar ni ordenar.',
            },
            b: {
                text: 'Es incorrecta porque cardinal contaría cuántos (2, 3, 4…); Bertha no cuantifica.',
            },
            c: {
                text: 'Es incorrecta porque ordinal diría el lugar en una secuencia (1.º, 2.º…); no hay ordenamiento, solo denominación.',
            },
        },
    },
];

export default block_46_48;
