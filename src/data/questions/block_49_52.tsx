import type { Question } from './index';

const block_49_52: Question[] = [
    {
        id: 49,
        // Enunciado propio con diálogo en tarjeta
        stem: (
            <>
                <p>
                    En una IE, se viene desarrollando un proyecto de aprendizaje
                    que implica la construcción de un vivero. En este contexto,
                    durante una de las actividades del proyecto, los estudiantes
                    de quinto grado, en pares, se encuentran revisando las
                    anotaciones que realizaron sobre el tamaño del terreno que
                    van a necesitar para el vivero. A partir de dichas
                    anotaciones, se produce el siguiente diálogo:
                </p>
                <div
                    className="card"
                    style={{ marginTop: 8, backgroundColor: '#ebebeb' }}
                >
                    <p>
                        Mabel dice: "Veo que no necesitamos mucho espacio para
                        el vivero. Creo que necesitamos tres quintos de los
                        noventa metros cuadrados del jardín".
                    </p>
                    <p>
                        Jorge dice: "¿Tú crees? A ver, creo que para saber
                        cuánto es los tres quintos de noventa deberíamos dividir
                        el noventa en cinco cantidades iguales y tomamos tres de
                        ellas. Entonces, <em>(mostrando sus anotaciones)</em>{' '}
                        eso significa que se divide noventa entre cinco y el
                        resultado lo multiplicamos por tres. Así que, nuestro
                        vivero medirá cincuenta y cuatro metros cuadrados".
                    </p>
                </div>
            </>
        ),
        text: (
            <>
                ¿Qué significado de la fracción se evidencia en el comentario de
                Jorge?
            </>
        ),
        options: {
            a: 'La fracción como medida.',
            b: 'La fracción como cociente.',
            c: 'La fracción como operador.',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque "fracción como medida" requiere un referente (p. ej., de su capacidad); aquí aparece un número adicional (90) para operar.',
            },
            b: {
                text: 'Es incorrecta porque "fracción como cociente" daría un resultado medible (p. ej., 3/5 de metro), sin operar con otra cantidad.',
            },
            c: {
                text: 'Es correcta porque al decir "3/5 de 90" se requiere multiplicar (3/5 × 90); la fracción opera sobre una cantidad: es operador.',
            },
        },
    },

    {
        id: 50,
        // Enunciado propio con diálogo en tarjeta
        stem: (
            <>
                <p>
                    Como parte de un proyecto de aprendizaje relacionado con la
                    venta de productos del huerto escolar, los estudiantes de
                    segundo grado, organizados en equipos, luego de haber
                    cosechado los rabanitos del huerto, averiguan la cantidad de
                    atados que pueden armar con dicha cosecha. En este contexto,
                    en uno de los equipos, se suscitó el siguiente diálogo:
                </p>
                <div
                    className="card"
                    style={{ marginTop: 8, backgroundColor: '#ebebeb' }}
                >
                    <p>
                        El docente dice: "Veo que han cosechado dos canastas de
                        rabanitos".
                    </p>
                    <p>
                        Rayda dice: "Sí. En una canasta, tenemos 17 rabanitos y,
                        en la otra, 24 rabanitos".
                    </p>
                    <p>
                        El docente dice: "Y con los rabanitos que cosecharon,
                        ¿cuántos atados de 10 rabanitos, en total, se pueden
                        armar?".
                    </p>
                    <p>
                        Rayda dice: "¡Eso es fácil! Un atado de 10 es una
                        decena. Entonces, para saber cuántos atados se pueden
                        armar, se mira las decenas en el número de rabanitos de
                        cada canasta.
                    </p>
                    <p>
                        Por ejemplo{' '}
                        <em>(escribe en una hoja los números 17 y 24)</em>, en
                        la canasta con 17 rabanitos{' '}
                        <em>(señala el número escrito)</em>, el 1 representa un
                        atado y el 7 los rabanitos que sobran. En la canasta con
                        24 rabanitos, se arman 2 atados y sobran 4 rabanitos. Al
                        final, con todos los rabanitos que recolectamos se
                        pueden armar 3 atados en total".
                    </p>
                </div>
            </>
        ),
        text: (
            <>
                El docente ha identificado que Rayda, al determinar la cantidad
                de atados, no ha considerado los rabanitos sobrantes para armar
                otro atado. Entonces, decide brindarle retroalimentación. ¿Cuál
                de las siguientes acciones pedagógicas es{' '}
                <strong>
                    <u>más</u>
                </strong>{' '}
                adecuada para ello?
            </>
        ),
        options: {
            a: 'Mencionarle que puede formar hasta cuatro atados y que, para ello, puede sumar los rabanitos que le sobraron de las dos canastas.',
            b: 'Pedirle que identifique cuántos rabanitos sobraron al armar los atados y, luego, solicitarle que verifique si es posible usar el total de sobrantes para formar atados adicionales.',
            c: 'Indicarle que, para determinar la máxima cantidad de atados de rabanito, debe juntar los rabanitos de las dos canastas y, a partir de esto, pedirle que vuelva a calcular cuántos atados se pueden formar.',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque el docente dice cómo formar atados y hasta sugiere sumar; es directiva, no hace pensar al estudiante.',
            },
            b: {
                text: 'Es correcta porque pide que el estudiante identifique sobrantes y verifique si puede usarlos; lo guía a analizar y descubrir la solución por sí mismo.',
            },
            c: {
                text: 'Es incorrecta porque empieza indicando el procedimiento (juntar canastas) y solo luego invita a calcular; sigue siendo semi-directiva.',
            },
        },
    },

    {
        id: 51,
        // Enunciado propio con TABLA (bordes completos)
        stem: (
            <>
                <p>
                    Los estudiantes de cuarto grado están identificando patrones
                    en diversas situaciones vinculadas con la IE. En este
                    contexto, un equipo analiza el siguiente cuadro de reparto y
                    recojo de material educativo del aula:
                </p>
                <div style={{ marginTop: 8, overflowX: 'auto' }}>
                    <table
                        style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            border: '1px solid var(--border)',
                            tableLayout: 'fixed',
                        }}
                    >
                        <thead>
                            <tr>
                                <th
                                    colSpan={5}
                                    style={{
                                        textAlign: 'center',
                                        padding: '8px 10px',
                                        border: '1px solid var(--border)',
                                        background: '#f9fafb',
                                        fontWeight: 600,
                                    }}
                                >
                                    Responsables del reparto y recojo de
                                    material educativo
                                </th>
                            </tr>
                            <tr>
                                {[
                                    'Lunes',
                                    'Martes',
                                    'Miércoles',
                                    'Jueves',
                                    'Viernes',
                                ].map((d) => (
                                    <th
                                        key={d}
                                        style={{
                                            textAlign: 'center',
                                            padding: '8px 10px',
                                            border: '1px solid var(--border)',
                                            background: '#f9fafb',
                                        }}
                                    >
                                        {d}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['Raúl', 'Amelia', 'Pedro', 'Vilma', 'Antonio'],
                                ['Iván', 'Ana', 'Beto', 'Alesia', 'Héctor'],
                                [
                                    'Aurora',
                                    'Sergio',
                                    'Adela',
                                    'Marcos',
                                    'Matilde',
                                ],
                            ].map((row, idx) => (
                                <tr key={idx}>
                                    {row.map((name) => (
                                        <td
                                            key={name}
                                            style={{
                                                textAlign: 'left',
                                                padding: '8px 10px',
                                                border: '1px solid var(--border)',
                                            }}
                                        >
                                            {name}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        ),
        text: (
            <>
                Durante esta actividad, los estudiantes del equipo le comentan a
                la docente que tienen dificultades para encontrar patrones.
                ¿Cuál de las siguientes acciones pedagógicas es{' '}
                <strong>
                    <u>más</u>
                </strong>{' '}
                adecuada para ayudar al equipo a identificar patrones en el
                cuadro presentado?
            </>
        ),
        options: {
            a: 'Preguntarles qué es un patrón y pedirles que mencionen algunos ejemplos. Después, plantearles un ejemplo con patrones similares al del cuadro y mencionarles de qué manera se pueden identificar dichos patrones. Finalmente, pedirles que repliquen lo mencionado para hallar los patrones del cuadro de reparto y recojo de materiales.',
            b: 'Pedirles que anoten qué características identifican en cada día de reparto y recojo de materiales. Luego, preguntarles si identifican días que compartan características similares. Finalmente, solicitarles que utilicen alguna marca que les permita mostrar el patrón o los patrones que han identificado.',
            c: 'Comentarles que un patrón, en el cuadro de recojo y reparto de materiales, puede hallarse al analizar la cantidad de niños o niñas por cada día. Sobre esta base, escribir en una hoja aparte, para los dos primeros días, la siguiente secuencia: dos niños-una niña, dos niñas-un niño. Finalmente, pedirles que completen dicha secuencia para los días restantes.',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque abre con pregunta teórica ("qué es un patrón") y luego modela el cómo; el alumno replica, no descubre.',
            },
            b: {
                text: 'Es correcta porque orienta a que identifiquen por sí mismos características que se repiten y a marcarlas; así se hace visible el patrón desde la propia exploración.',
            },
            c: {
                text: 'Es incorrecta porque el docente explica y escribe secuencias; el estudiante solo completa, reduciendo el razonamiento.',
            },
        },
    },

    {
        id: 52,

        stem: (
            <>
                <p>
                    Los estudiantes de cuarto grado, organizados en equipos,
                    están resolviendo el siguiente problema:
                </p>
                <div
                    className="card"
                    style={{ marginTop: 8, backgroundColor: '#ebebeb' }}
                >
                    <p>
                        Una panificadora se encuentra de aniversario y, por
                        ello, desea repartir equitativamente 45 kilogramos de
                        galletas entre los trabajadores de sus dos locales. Si
                        en la empresa laboran 42 personas en el local A y 48
                        personas en el local B, ¿qué cantidad de galletas le
                        corresponde a cada trabajador?
                    </p>
                </div>
                <p>
                    En este contexto, un equipo presenta el siguiente
                    procedimiento:
                </p>
                <div
                    className="card"
                    style={{ marginTop: 8, backgroundColor: '#ebebeb' }}
                >
                    <p>
                        <em>(Muestra su registro y lo lee)</em> Primero,
                        hallamos el número total de trabajadores. Para ello,
                        sumamos 42 más 48 y nos dio como resultado 90
                        trabajadores. Luego, dividimos 90 entre 45, porque el
                        número mayor siempre se pone primero para poder dividir.
                        Al hacer la división, obtuvimos como respuesta 2.
                        Entonces, concluimos que cada trabajador recibirá 2 k de
                        galletas.
                    </p>
                </div>
            </>
        ),
        text: (
            <>
                ¿Cuál de las siguientes alternativas evidencia el{' '}
                <strong>
                    <u>principal error</u>
                </strong>{' '}
                en la resolución de este problema?
            </>
        ),
        options: {
            a: 'Emplear abreviaturas inadecuadas como "k" en lugar de "kg" para referirse a kilogramos.',
            b: 'Considerar que el número mayor es el dividendo y el número menor es el divisor.',
            c: 'Realizar una suma con las cantidades de trabajadores de los locales A y B.',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque errores de abreviaturas no son el núcleo del fallo en el procedimiento numérico.',
            },
            b: {
                text: 'Es correcta porque asumir que "el mayor va de dividendo y el menor de divisor" es una regla falsa; revela un error de procedimiento grave en división.',
            },
            c: {
                text: 'Es incorrecta porque sumar los trabajadores de A y B para el total sí era un paso adecuado.',
            },
        },
    },
];

export default block_49_52;
