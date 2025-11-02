import type { Question } from './index';

const block_59_60: Question[] = [
    {
        id: 59,
        stemBlockId: '59-60',
        text: (
            <>
                A partir de este diálogo, se evidencian diversos logros con
                respecto a la elaboración del gráfico de barras. ¿Cuál de los
                siguientes logros{' '}
                <strong>
                    <u>NO</u>
                </strong>{' '}
                se evidencia en el diálogo de los estudiantes?
            </>
        ),
        options: {
            a: 'Identifica los títulos de los ejes del gráfico de barras que representará las preferencias de los estudiantes.',
            b: 'Identifica la cantidad de barras necesarias de acuerdo con las preferencias de los estudiantes.',
            c: 'Identifica un ordenamiento de las barras para comunicar adecuadamente las diferencias en las preferencias de los estudiantes.',
        },
        explanations: {
            a: {
                text: 'Es correcta porque en el diálogo no se ve que identifiquen títulos de ejes; discuten cantidad de barras y orden, pero no rotulado de ejes: ese logro falta.',
            },
            b: {
                text: 'Es incorrecta porque sí determinan cuántas barras necesitan (una por cada opción de bebida).',
            },
            c: {
                text: 'Es incorrecta porque sí consideran ordenarlas (p. ej., de mayor a menor) para comunicar mejor.',
            },
        },
    },
    {
        id: 60,
        stemBlockId: '59-60',
        text: (
            <>
                Sobre la base del diálogo de los estudiantes, el docente busca
                orientarlos para que identifiquen qué otros aspectos pueden
                considerar para mejorar la elaboración de su gráfico de barras.
                ¿Cuál de las siguientes preguntas favorece dicho propósito?
            </>
        ),
        options: {
            a: '¿Qué palabras clave usarán para nombrar cada barra del gráfico?',
            b: '¿Han pensado qué escala emplearán en el eje vertical de su gráfico?',
            c: '¿Han identificado todos los datos que serán representados en el gráfico?',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque nombrar cada barra ya lo tenían en cuenta; no agrega mejora clave.',
            },
            b: {
                text: 'Es correcta porque preguntar por la escala del eje vertical obliga a decidir saltos y proporciones para que alturas representen bien las frecuencias; es un ajuste técnico crucial.',
            },
            c: { text: 'Es incorrecta porque verificar si suman los totales es un control general de datos, pero no mejora la construcción del gráfico en sí.' },
        },
    },
];

export default block_59_60;
