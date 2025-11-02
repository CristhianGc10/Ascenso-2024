import type { Question } from './index';

const block_4_7: Question[] = [
    {
        id: 4,
        stemBlockId: '4-7',
        text: (
            <>
                Al culminar de leer el texto, los estudiantes dialogan sobre los
                aspectos que llamaron su atención. ¿Cuál de los comentarios se
                ajusta a una{' '}
                <strong>
                    <u>reflexión sobre el contenido</u>
                </strong>{' '}
                del texto?
            </>
        ),
        options: {
            a: 'Alda dice: “Las pulguitas fueron muy arriesgadas al defender a Noche y a Luna de Cielo”.',
            b: 'Sandra dice: “A veces, Noche se rascaba con fuerza porque las pulgas le picaban fuerte”.',
            c: 'Carol dice: “El cuento trata de un gran perro, dos gatos chiquititos y tres pulguitas”.',
        },
        explanations: {
            a: {
                text: 'Es correcta porque califica la conducta con “muy arriesgadas”. El adverbio + adjetivo introducen un juicio de valor. Se está reflexionando sobre lo que pasó, no describiendo hechos ni pidiendo tema.',
            },
            b: {
                text: 'Es incorrecta porque solo reproduce un hecho del relato sin emitir valoración ni exigir interpretación adicional.',
            },
            c: {
                text: 'Es incorrecta porque preguntar “de qué trata” apunta a tema; para responder hay que abstraer el asunto central, no emitir juicios.',
            },
        },
    },
    {
        id: 5,
        stemBlockId: '4-7',
        text: (
            <>
                Durante el intercambio de ideas, la docente tiene como propósito
                plantear algunas preguntas para promover que los estudiantes{' '}
                <strong>
                    <u>deduzcan información</u>
                </strong>{' '}
                del texto. ¿Cuál de las siguientes preguntas es adecuada para
                ello?
            </>
        ),
        options: {
            a: '¿Con qué intención el autor escribió el gruñido de Cielo con letras mayúsculas?',
            b: '¿Qué fue lo que primero entró en la casa cuando la inmensa puerta se abrió?',
            c: '¿A qué se refiere Luna cuando le dice a las pulgas: “¡Vuelvan a casa!”?',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque se enfoca en recursos de forma (intención y uso de mayúsculas), no en el significado de lo que se dice.',
            },
            b: {
                text: 'Es incorrecta porque pregunta por un dato que se localiza en el relato sin mayor elaboración.',
            },
            c: {
                text: 'Es correcta porque interpretar la expresión “vuelvan a casa” exige explicar qué quiere decir esa frase dentro del cuento. No basta con copiar una línea; hay que reconstruir su sentido con las pistas del texto.',
            },
        },
    },
    {
        id: 6,
        stemBlockId: '4-7',
        text: (
            <>
                En otro momento del intercambio de ideas, un estudiante comenta
                lo siguiente:
                <div
                    className="card"
                    style={{ marginTop: 8, backgroundColor: '#ebebeb' }}
                >
                    <p>
                        “Algunas partes de la historia no eran fáciles de
                        entender. Por ejemplo, al inicio, no entendí quién dijo:
                        ‘¡Cielo, tu comida!’. Pensé que era uno de los gatitos o
                        las pulgas, pero ellos le tenían miedo a Cielo.
                        Entonces, volví a leer y me di cuenta de que no podían
                        ser Luna, Cielo ni las pulgas; seguro era el dueño o
                        dueña de Cielo”.
                    </p>
                </div>
                ¿Qué proceso de aprendizaje se destaca{' '}
                <strong>
                    <u>principalmente</u>
                </strong>{' '}
                en la intervención del estudiante?
            </>
        ),
        options: {
            a: 'Conflicto cognitivo.',
            b: 'Transferencia del aprendizaje.',
            c: 'Metacognición sobre las estrategias de aprendizaje.',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque el conflicto cognitivo ya fue superado; el estudiante no está dudando, ya encontró una vía.',
            },
            b: {
                text: 'Es incorrecta porque no aplica lo aprendido a otro contexto; sigue en el mismo escenario.',
            },
            c: {
                text: 'Es correcta porque el estudiante comenta su propio proceso: reconoce dificultad (“no era fácil”), explica qué hizo (“volví a leer”) y qué comprendió (“me di cuenta…”). Eso es metacognición: pensar sobre cómo aprende.',
            },
        },
    },
    {
        id: 7,
        stemBlockId: '4-7',
        text: (
            <>
                En otro momento, la docente plantea algunas acciones pedagógicas
                para favorecer que los estudiantes reflexionen sobre el
                contenido del texto. ¿Cuál de las siguientes acciones
                pedagógicas{' '}
                <strong>
                    <u>se centra</u>
                </strong>{' '}
                en dicho propósito?
            </>
        ),
        options: {
            a: 'Entregarles tarjetas que contengan expresiones que fueron mencionadas por los personajes del cuento. Después, pedirles que, en el texto, busquen dichas frases y, en las tarjetas, anoten qué personajes las mencionan.',
            b: 'Solicitarles que escriban recomendaciones a compañeros de otros salones para animarlos a leer el cuento. Después, proponerles que intercambien sus recomendaciones para brindarse sugerencias de mejora.',
            c: 'Pedirles que dibujen la escena inicial y final del cuento. Después, solicitarles que expliquen qué elementos conforman las escenas que han dibujado.',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque el docente entrega tarjetas con expresiones ya hechas; el protagonismo no lo tiene el estudiante y la actividad se vuelve mecánica.',
            },
            b: {
                text: 'Es correcta porque pedir recomendaciones escritas y luego intercambiarlas para sugerir mejoras pone a los estudiantes a producir, comparar y ajustar criterios. Se opina con propósito y se aprende por descubrimiento.',
            },
            c: {
                text: 'Es incorrecta porque dibujar y describir escenas es una tarea centrada en recuperación de hechos, no en tomar posición y argumentar.',
            },
        },
    },
];

export default block_4_7;
