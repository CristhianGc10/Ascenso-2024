import type { Question } from './index';

const block_57_58: Question[] = [
    {
        id: 57,
        stemBlockId: '57-58',
        text: (
            <>
                <p style={{ marginTop: 8 }}>
                    Después de elaborar las preguntas que usarán en la encuesta,
                    los estudiantes se las presentan a la docente para que los
                    ayude a revisarlas. Una de las preguntas es la siguiente:
                </p>
                <div
                    className="card"
                    style={{ marginTop: 8, backgroundColor: '#ebebeb' }}
                >
                    <p>¿Cuántas horas al día usas el internet en tu casa?</p>
                    <p>A. Menos de 1 hora</p>
                    <p>B. De 1 a 4 horas</p>
                    <p>C. De 3 a 6 horas</p>
                    <p>D. Más de 6 horas</p>
                </div>
                <p style={{ marginTop: 8 }}>
                    La docente nota que, si bien hay logros en la pregunta
                    elaborada por los estudiantes, hay aspectos que requieren
                    mejorarse. ¿Cuál de los siguientes aspectos es{' '}
                    <strong>
                        <u>necesario</u>
                    </strong>{' '}
                    mejorar?
                </p>
            </>
        ),
        options: {
            a: 'La utilización de una pregunta cerrada.',
            b: 'La cantidad de alternativas de respuestas.',
            c: 'La organización de los intervalos de horas.',
        },
        explanations: {
            a: {
                text: 'Es correcta porque las opciones C (De 3 a 6 horas) y B (De 1 a 4 horas) se superponen en el rango de 3 a 4 horas, lo que hace ambigua la respuesta.',
            },
            b: {
                text: 'Es incorrecta porque la pregunta es clara en su formulación.',
            },
            c: {
                text: 'Es incorrecta porque tener 4 opciones es apropiado para este tipo de pregunta.',
            },
        },
    },
    {
        id: 58,
        stemBlockId: '57-58',
        text: (
            <>
                <p style={{ marginTop: 8 }}>
                    Después de haber encuestado a una muestra de estudiantes de
                    la IE, el equipo menciona a la docente que va a elaborar un
                    gráfico de líneas para representar los datos que recopilaron
                    con la siguiente pregunta:
                </p>
                <div
                    className="card"
                    style={{ marginTop: 8, backgroundColor: '#ebebeb' }}
                >
                    <p>
                        En tu casa, ¿para qué actividad usas más tiempo el
                        internet?
                    </p>
                    <p>A. Para jugar con mis amigos/amigas</p>
                    <p>B. Para realizar actividades escolares</p>
                    <p>C. Para usar las redes sociales</p>
                    <p>D. Para ver películas</p>
                    <p>E. Otros</p>
                </div>
                <p style={{ marginTop: 8 }}>
                    Ante ello, la docente busca que los estudiantes evalúen si
                    es pertinente la elección de un gráfico de líneas. ¿Cuál de
                    las siguientes acciones pedagógicas es adecuada para tal
                    propósito?
                </p>
            </>
        ),
        options: {
            a: 'Indicarles que el gráfico de líneas se usa cuando es necesario representar cómo cambian los datos en un determinado tiempo. A partir de ello, proponerles usar un gráfico de barras para representar los datos recopilados en la pregunta de la encuesta.',
            b: 'Mostrarles diversos tipos de gráficos, como un gráfico de líneas y un pictograma. Luego, pedirles que revisen cuál de estos gráficos es más fácil de elaborar y permite comparar, de forma más sencilla, la información obtenida con la pregunta de la encuesta.',
            c: 'Presentarles ejemplos de gráficos de líneas para que identifiquen su uso y el tipo de variable involucrada. Sobre esta base, preguntarles si el gráfico que decidieron emplear permitirá representar adecuadamente los datos que han recopilado con la pregunta de la encuesta.',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque un gráfico de líneas se usa para datos continuos y evolutivos, no para categorías.',
            },
            b: {
                text: 'Es correcta porque los datos son categorías cualitativas (actividades) no datos numéricos continuos. Un gráfico de barras sería más apropiado.',
            },
            c: {
                text: 'Es incorrecta porque la elección del gráfico debe basarse en el tipo de datos, no en la costumbre.',
            },
        },
    },
];

export default block_57_58;
