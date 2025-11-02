import type { Question } from './index';

const block_20_23: Question[] = [
    {
        id: 20,
        text: (
            <>
                <p>
                    Durante una sesión de aprendizaje, la mayoría de estudiantes
                    comenta que solo los reptiles, como los cocodrilos y las
                    iguanas, son similares a los dinosaurios. Luego de
                    escucharlos, la docente presenta a los estudiantes la imagen
                    de las patas de un gallo y las de un dinosaurio, y les
                    solicita que las comparen.
                </p>
                <p>
                    A partir de esta acción pedagógica, ¿cuál es el{' '}
                    <strong>
                        <u>principal</u>
                    </strong>{' '}
                    proceso de aprendizaje que busca promover la docente en los
                    estudiantes?
                </p>
            </>
        ),
        options: {
            a: 'La metacognición sobre las estrategias de aprendizaje.',
            b: 'La generación de conflicto cognitivo.',
            c: 'La transferencia de aprendizajes.',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque el estudiante no está describiendo cómo aprendió ni valorando su avance.',
            },
            b: {
                text: 'Es correcta porque contrasta una idea previa (“solo reptiles…”) con evidencia (patas de gallo), de modo que el estudiante experimente duda fundamentada y revise su creencia. Ese choque controlado es el núcleo del conflicto cognitivo.',
            },
            c: {
                text: 'Es incorrecta porque no aplica lo aprendido a un nuevo contexto; la revisión ocurre en el mismo tema.',
            },
        },
    },

    {
        id: 21,
        stem: (
            <>
                <p>
                    Los estudiantes de sexto grado y su docente se encuentran
                    desarrollando una unidad didáctica que tiene como propósito
                    que comprendan cómo se realiza la respiración en el ser
                    humano. En este contexto, durante una de las sesiones, un
                    estudiante realiza el siguiente comentario:
                </p>
                <div
                    className="card"
                    style={{ marginTop: 8, backgroundColor: '#ebebeb' }}
                >
                    <p>
                        “El proceso de respiración se realiza a través del
                        sistema respiratorio que tienen todas las personas y
                        está formado por varios órganos, como los pulmones.
                        Gracias a este sistema, el cuerpo inspira para tomar
                        oxígeno del exterior por la nariz y pasar a los otros
                        órganos; luego, espira para botar el dióxido de
                        carbono”.
                    </p>
                </div>
            </>
        ),
        text: (
            <>
                La docente busca que el estudiante amplíe sus ideas sobre el
                proceso de respiración en el ser humano. ¿Cuál de los siguientes
                grupos de preguntas es necesario{' '}
                <strong>
                    <u>priorizar</u>
                </strong>{' '}
                para ello?
            </>
        ),
        options: {
            a: '¿Qué diferencias hay entre la inspiración y espiración en el ser humano? ¿De dónde proviene el oxígeno que inspiramos?',
            b: '¿Cuál es la función que tiene el sistema respiratorio en las personas? ¿En qué órgano de este sistema se inicia la respiración? ',
            c: '¿Has considerado para qué sirve el oxígeno que ingresa al cuerpo en la respiración? ¿De dónde proviene el dióxido de carbono que eliminamos al exterior?',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque comparar diferencias entre inspiración/espiración no conduce a ampliar la comprensión integral del proceso; fragmenta el análisis en definiciones parciales y te aleja de la idea de “cómo funciona todo el sistema”.',
            },
            b: {
                text: 'Es incorrecta porque preguntar “en qué órgano inicia” sugiere una respuesta puntual y dirige la atención a un dato suelto, no a relacionar pasos, funciones y finalidad del proceso.',
            },
            c: {
                text: 'Es correcta porque indaga por el rol del oxígeno y del CO₂ y obliga a reconstruir el circuito funcional (entrada, aprovechamiento, salida), conectando función y secuencia, que es exactamente ampliar ideas del proceso respiratorio.',
            },
        },
    },

    {
        id: 22,
        stem: (
            <>
                <p>
                    En el marco de un proyecto de aprendizaje, uno de los
                    propósitos de la docente es que los estudiantes de cuarto
                    grado expliquen cómo se realiza la nutrición del ser humano.
                    En este contexto, durante una de las sesiones, los
                    estudiantes dialogan, junto con la docente, sobre cómo se
                    realiza el proceso de digestión de los alimentos en nuestro
                    cuerpo. A continuación, se presenta el comentario de uno de
                    los estudiantes:
                </p>
                <div
                    className="card"
                    style={{ marginTop: 8, backgroundColor: '#ebebeb' }}
                >
                    <p>
                        “Lo que comemos ingresa por la boca. Luego, pasa al
                        esófago y llega al estómago. En el estómago, el alimento
                        se separa en sólido y líquido para pasar a cada uno de
                        los dos intestinos, que están conectados con el
                        estómago. Todo lo líquido pasa al intestino delgado y
                        todo lo sólido pasa al intestino grueso”.
                    </p>
                </div>
            </>
        ),
        text: (
            <>
                La docente ha identificado logros y aspectos por mejorar en el
                comentario del estudiante. ¿Cuál de los siguientes logros se
                evidencia en dicho comentario?
            </>
        ),
        options: {
            a: 'Describe la absorción de nutrientes en el sistema digestivo.',
            b: 'Explica las funciones de los órganos en el proceso de la digestión.',
            c: 'Identifica los órganos que participan en la digestión de los alimentos.',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque hablar de “nutrientes” pide otro tipo de evidencia (clasificación/química de alimentos), que no aparece en el comentario citado.',
            },
            b: {
                text: 'Es incorrecta porque “explicar funciones” supone describir qué hace cada órgano y cómo interactúa; el texto no desarrolla esas funciones.',
            },
            c: {
                text: 'Es correcta porque el comentario solo nombra órganos que intervienen (esófago, estómago, intestinos) sin detallar sus funciones; eso es identificar los que participan.',
            },
        },
    },

    {
        id: 23,
        text: (
            <>
                <p>
                    En el marco de un proyecto de aprendizaje sobre la creación
                    y cuidado de áreas verdes de la IE, un docente de tercer
                    grado desarrolla, junto con los estudiantes, actividades que
                    promuevan la comprensión de las características de las
                    plantas.
                </p>
                <p>
                    Una de estas actividades tiene como propósito que los
                    estudiantes identifiquen los aspectos que permiten que las
                    plantas crezcan. A partir de dicha actividad, el docente
                    nota que la mayoría de los estudiantes considera que la luz
                    es un aspecto indispensable para la germinación de una
                    semilla.
                </p>
                <p>
                    ¿Cuál de las siguientes experiencias es{' '}
                    <strong>
                        <u>más</u>
                    </strong>{' '}
                    adecuada para favorecer que los estudiantes cuestionen dicha
                    idea?
                </p>
            </>
        ),
        options: {
            a: 'Cultivar dos grupos de semillas iguales: un grupo en ausencia de luz y el otro en presencia de luz. Utilizar el mismo volumen de agua, la misma frecuencia en el riego y la misma tierra de cultivo en los dos grupos de semillas.',
            b: 'Cultivar dos grupos de semillas iguales: un grupo en ausencia de luz y en algodón, el otro grupo de semillas en presencia de luz y en tierra de cultivo. Utilizar el mismo volumen de agua y la misma frecuencia en el riego en los dos grupos de semillas.',
            c: 'Cultivar dos grupos de semillas iguales: un grupo en ausencia de luz y riego interdiario, el otro grupo de semillas en presencia de luz y con riego diario. Utilizar el mismo volumen de agua en el riego y la misma tierra de cultivo en los dos grupos de semillas.',
        },
        explanations: {
            a: {
                text: 'Es correcta porque propone un experimento paralelo con una sola diferencia (con luz / sin luz) y todo lo demás igual; así se puede cuestionar la creencia de que “la luz es indispensable” observando resultados comparables.',
            },
            b: {
                text: 'Es incorrecta porque introduce algodón solo en un grupo, añadiendo otra variable y confundiendo la causa del efecto.',
            },
            c: {
                text: 'Es incorrecta porque cambia el riego entre grupos (interdiario vs. diario), alterando más de un factor y volviendo imposible atribuir el resultado a la luz.',
            },
        },
    },
];

export default block_20_23;
