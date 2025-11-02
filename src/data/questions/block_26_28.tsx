import type { Question } from './index';

const block_26_28: Question[] = [
    {
        id: 26,
        // Enunciado propio con tabla CON BORDES COMPLETOS
        stem: (
            <>
                <p>Un estudiante presentó la siguiente tabla a su docente:</p>
                <div style={{ marginTop: 8, overflowX: 'auto' }}>
                    <table
                        style={{
                            width: '100%',
                            minWidth: '600px',
                            borderCollapse: 'collapse',
                            border: '1px solid var(--border)',
                            tableLayout: 'fixed',
                        }}
                    >
                        <thead>
                            <tr>
                                <th
                                    style={{
                                        textAlign: 'center',
                                        padding: '12px 10px',
                                        border: '1px solid var(--border)',
                                        background: '#f9fafb',
                                    }}
                                >
                                    Pregunta
                                </th>
                                <th
                                    style={{
                                        textAlign: 'center',
                                        padding: '12px 10px',
                                        border: '1px solid var(--border)',
                                        background: '#f9fafb',
                                    }}
                                >
                                    Variable independiente
                                </th>
                                <th
                                    style={{
                                        textAlign: 'center',
                                        padding: '12px 10px',
                                        border: '1px solid var(--border)',
                                        background: '#f9fafb',
                                    }}
                                >
                                    Variable dependiente
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td
                                    style={{
                                        padding: '12px 10px',
                                        border: '1px solid var(--border)',
                                        lineHeight: '1.4',
                                    }}
                                >
                                    ¿Calentar el agua disolverá más azúcar?
                                </td>
                                <td
                                    style={{
                                        padding: '12px 10px',
                                        border: '1px solid var(--border)',
                                        lineHeight: '1.4',
                                    }}
                                >
                                    La temperatura del agua
                                </td>
                                <td
                                    style={{
                                        padding: '12px 10px',
                                        border: '1px solid var(--border)',
                                        lineHeight: '1.4',
                                    }}
                                >
                                    El tipo de azúcar (blanca o rubia)
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <style>{`
                    @media (max-width: 600px) {
                        table {
                            font-size: 12px !important;
                        }
                        
                        th, td {
                            padding: 10px 6px !important;
                        }
                    }
                `}</style>
            </>
        ),
        text: <>¿Cuál es el error en la tabla presentada por el estudiante?</>,
        options: {
            a: 'El planteamiento de la pregunta.',
            b: 'La identificación de la variable dependiente.',
            c: 'La identificación de la variable independiente.',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque la pregunta está bien: "calentar el agua disolverá más azúcar" separa claramente lo que se cambia (temperatura) y lo que se observa (cantidad disuelta).',
            },
            b: {
                text: 'Es correcta porque rotula como dependiente "tipo de azúcar", cuando "tipo" es aquello que tú eliges y manipulas si lo cambiaras; por definición, sería independiente (si se variara). Ese rótulo es el error.',
            },
            c: {
                text: 'Es incorrecta porque identifica bien la dependiente como cantidad de azúcar disuelta (eso es lo que se mide/observa tras calentar).',
            },
        },
    },

    {
        id: 27,
        stem: (
            <>
                <p>
                    Una docente presenta a los estudiantes de quinto grado una
                    bolsa con 1 kilogramo de arroz y otra bolsa con 1 kilogramo
                    de arena fina. Luego, inicia el diálogo con ellos a partir
                    de la siguiente pregunta: "¿Cuál de las bolsas creen que
                    tiene mayor cantidad de materia?".
                </p>
                <p>
                    A continuación, se presenta la respuesta de una estudiante:
                </p>
                <div
                    className="card"
                    style={{ marginTop: 8, backgroundColor: '#ebebeb' }}
                >
                    <p>
                        "Pienso que la bolsa de arroz tiene más materia porque
                        es más grande".
                    </p>
                </div>
            </>
        ),
        text: (
            <>
                Con relación a las características de la materia, ¿cuál de los
                siguientes aprendizajes es necesario{' '}
                <strong>
                    <u>priorizar</u>
                </strong>{' '}
                para brindar retroalimentación a la estudiante?
            </>
        ),
        options: {
            a: 'Identifica la diferencia entre kilogramos y gramos.',
            b: 'Identifica la diferencia entre masa y volumen.',
            c: 'Identifica la diferencia entre masa y peso.',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque confunde conceptos de unidades (kg vs g) con cantidad de materia; no responde a la lógica física del caso.',
            },
            b: {
                text: 'Es correcta porque si los materiales son equivalentes, más volumen implica más masa y por tanto más materia; la intuición "más grande = más materia" es válida con esa salvedad.',
            },
            c: {
                text: 'Es incorrecta porque mezcla "peso" sin contexto (gravedad) y se aparta de la relación clave volumen ↔ masa para hablar de materia.',
            },
        },
    },

    {
        id: 28,
        stem: (
            <>
                <p>
                    Los estudiantes de sexto grado, con orientación del docente,
                    desarrollan una unidad didáctica sobre cómo actúa el calor
                    en los cuerpos. Como parte de una de las actividades
                    iniciales, el docente presenta a los estudiantes la
                    siguiente situación:
                </p>
                <div
                    className="card"
                    style={{ marginTop: 8, backgroundColor: '#ebebeb' }}
                >
                    <p>
                        Javier estaba preparando la comida y le pidió a Karina,
                        su hermana menor, que le pase un cucharón para mover el
                        aderezo de la sartén. Ella le pasa un cucharón de metal,
                        pero Javier le dice que mejor le entregue el cucharón de
                        madera porque el de metal se calienta en menos tiempo y
                        podría quemarse la mano.
                    </p>
                </div>
            </>
        ),
        text: (
            <>
                A partir del análisis y el reconocimiento de la relación de
                variables que se presentan en la situación, el docente busca que
                los estudiantes identifiquen la variable independiente que
                pueden indagar. ¿Cuál de las siguientes preguntas es{' '}
                <strong>
                    <u>más</u>
                </strong>{' '}
                adecuada para dicho propósito?
            </>
        ),
        options: {
            a: '¿Qué es lo que hace que un cucharón se caliente en más o menos tiempo que el otro?',
            b: '¿Qué se debe medir para saber que un cucharón se calienta en más o menos tiempo que el otro?',
            c: '¿Qué se tiene que hacer para comprobar que un cucharón se calienta en más o menos tiempo que el otro?',
        },
        explanations: {
            a: {
                text: 'Es correcta porque pregunta por qué factor hace que un cucharón se caliente más rápido; esto conduce a identificar la variable que produce el cambio (material, grosor, etc.), es decir, la independiente.',
            },
            b: {
                text: 'Es incorrecta porque deriva hacia qué medir (tiempo/temperatura), que describe la dependiente, no la independiente.',
            },
            c: {
                text: 'Es incorrecta porque pide "qué hacer para comprobar", desplazando el foco al procedimiento experimental y no a aislar la variable causante.',
            },
        },
    },
];

export default block_26_28;
