import type { Question } from './index';

const block_34_35: Question[] = [
    {
        id: 34,
        // Enunciado propio
        stem: (
            <>
                <p>
                    Durante el refrigerio, la docente de primer grado indica a
                    los estudiantes que, al terminar de comer, pueden guardar
                    sus loncheras y prepararse para el recreo. Cuando toca el
                    timbre para el inicio del recreo, Sara, una de las
                    estudiantes, coloca rápidamente los alimentos que no comió
                    dentro de su lonchera y trata de cerrarla. Al no
                    conseguirlo, se molesta, deja la lonchera a un costado y
                    empieza a llorar en su sitio.
                </p>
                <p>
                    La docente, quien ha observado la situación, se acerca a
                    Sara para ayudarla. ¿Cuál de las siguientes acciones
                    pedagógicas es{' '}
                    <strong>
                        <u>más</u>
                    </strong>{' '}
                    adecuada para promover la autorregulación emocional de la
                    estudiante?
                </p>
            </>
        ),
        text: <></>, // la pregunta ya está en el stem
        options: {
            a: 'Mencionar a la estudiante que, si pierde la calma, le será más difícil cerrar su lonchera. Luego, comentarle que el problema que se le ha presentado no es de gravedad. Finalmente, aconsejarle que, en lugar de estar frustrada, trate de disfrutar del recreo jugando con sus compañeros.',
            b: 'Pedir a la estudiante que narre lo que ha sucedido y cómo esto la hizo sentir. Luego, explicarle que, a veces, cuando no obtenemos resultados que esperamos, es normal sentirnos afectados. Finalmente, ayudarla a que identifique otras maneras de afrontar situaciones que la hagan sentir así.',
            c: 'Ayudar a la estudiante a sacar los alimentos de su lonchera y explicarle qué es lo que impedía que cierre bien. Luego, recordarle que, siempre que tenga dificultades, puede acercarse a ella y pedirle ayuda. Finalmente, mostrarle cómo se podrían guardar sus cosas dentro de la lonchera y pedirle que lo vuelva a hacer por sí misma.',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque minimiza (“no es grave”), da sermones y muestra qué hacer; no valida la emoción ni promueve autorregulación.',
            },
            b: {
                text: 'Es correcta porque guía a reconocer la emoción vivida y luego a proponer alternativas de afrontamiento; es la progresión deseable en autorregulación.',
            },
            c: {
                text: 'Es incorrecta porque empieza bien, pero vuelve a explicar (adulto) en lugar de provocar que el niño piense y elija opciones.',
            },
        },
    },
    {
        id: 35,
        // Enunciado propio con cita en tarjeta
        stem: (
            <>
                <p>
                    Durante el recreo, una docente observa que José Luis, un
                    estudiante de cuarto grado, está sentado solo en una esquina
                    del patio y con la mirada hacia el suelo. La docente se
                    acerca para preguntarle qué le ocurre y José Luis le
                    responde lo siguiente:
                </p>
                <div
                    className="card"
                    style={{ marginTop: 8, backgroundColor: '#ebebeb' }}
                >
                    <p>
                        “Hoy traje en la lonchera ensalada de frutas y recordé a
                        mis abuelitos. Todas las mañanas solía desayunar la
                        ensalada de frutas que preparábamos juntos. Hace dos
                        semanas, se mudaron lejos y me da pena. Los extraño
                        mucho”.
                    </p>
                </div>
            </>
        ),
        text: (
            <>
                ¿Cuál de las siguientes posibles intervenciones de la docente
                evidencia empatía?
            </>
        ),
        options: {
            a: '“Yo crecí junto a mis primas hasta que se mudaron. Como me aburría sin ellas, mis papás me llevaban a visitarlas cada cierto tiempo. Pienso que podrías pedirles a tus papás que vayan contigo a visitar a tus abuelitos al menos una vez por semana”.',
            b: '“Me imagino lo triste que debes estar, creo que yo también lo estaría. Se nota que estabas acostumbrado a realizar actividades con tus abuelitos y que es difícil no verlos todos los días como antes”.',
            c: '“Tranquilo, estoy seguro de que tus abuelitos están bien. Creo que no deberías estar tan triste. Además, estos cambios son parte de la vida y, poco a poco, te acostumbrarás”.',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque salta a “solucionar” sin validar el dolor; no hay señales de ponerse en su lugar.',
            },
            b: {
                text: 'Es correcta porque expresa empatía explícita (“me imagino… es difícil…”) y no minimiza; reconoce la vivencia del otro antes de sugerir algo.',
            },
            c: {
                text: 'Es incorrecta porque minimiza (“ya te pasará”, “no deberías estar tan triste”) y cuestiona su sentir; eso es anti-empático.',
            },
        },
    },
];

export default block_34_35;
