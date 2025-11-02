import type { Question } from './index';

const block_15_16: Question[] = [
    {
        id: 15,
        stem: (
            <>
                <p>
                    Como parte de una sesión de aprendizaje, los estudiantes de
                    cuarto grado están escuchando audios de leyendas de
                    animales. En este contexto, el docente les propone analizar
                    la leyenda del jaguar. A continuación, se presenta un
                    fragmento de la grabación:
                </p>
                <div
                    className="card"
                    style={{ marginTop: 8, backgroundColor: '#ebebeb' }}
                >
                    <p>
                        “Cuentan por ahí que, hace mucho tiempo, el jaguar era
                        el único rey de la selva. Su gran fuerza y habilidad lo
                        hacían sentir orgulloso. Esto le permitía dar órdenes a
                        todos los animales, que, atemorizados, lo obedecían. Y
                        así fue, hasta que un grillo se cansó de cumplir sus
                        mandatos. Entonces, decidió retarlo a una pelea”.
                    </p>
                </div>
            </>
        ),
        text: (
            <>
                El docente propone a los estudiantes realizar una pausa a la
                grabación para dialogar sobre el contenido de este fragmento.
                ¿Qué comentario de los estudiantes evidencia una{' '}
                <strong>
                    <u>deducción de información</u>
                </strong>{' '}
                a partir del texto oral?
            </>
        ),
        options: {
            a: '“Veo que este grillo ya no aguantó seguir haciendo caso al jaguar”.',
            b: '“Es gracioso que el que quiere pelearse con el jaguar sea un animal tan chiquito”.',
            c: '“Los otros animales no se enfrentaban al jaguar porque pensaban que este les podía hacer daño”.',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque enuncia algo que sí se puede buscar en el texto tal cual está.',
            },
            b: {
                text: 'Es incorrecta porque introduce una valoración del narrador (“es gracioso…”), que no sirve para inferir el hecho pedido.',
            },
            c: {
                text: 'Es correcta porque la opción elegida expresa una conclusión que no aparece textual: explica un comportamiento de los personajes a partir de consecuencias previsibles, no copiando líneas del cuento.',
            },
        },
    },
    {
        id: 16,
        text: (
            <>
                <p>
                    En el marco de una unidad didáctica sobre cómo funcionan las
                    máquinas simples en la vida cotidiana, un docente tiene como
                    propósito activar los saberes previos de los estudiantes de
                    sexto grado. Para ello, el docente pide a los estudiantes
                    que se organicen en equipos y dialoguen a partir de las
                    siguientes preguntas: “¿Qué máquinas simples utilizamos en
                    nuestra vida diaria? ¿Cómo funcionan estas máquinas?”.
                </p>
                <p>
                    ¿Por qué esta acción pedagógica es adecuada para activar los
                    saberes previos de los estudiantes?
                </p>
            </>
        ),
        options: {
            a: 'Porque se centra en que los estudiantes reflexionen acerca de la importancia de comprender qué son las máquinas simples.',
            b: 'Porque se centra en que los estudiantes elaboren explicaciones acerca de las máquinas simples sobre la base de su experiencia.',
            c: 'Porque se centra en que los estudiantes cuestionen sus conocimientos sobre las máquinas simples y su funcionamiento.',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque invitar a “reflexionar sobre la importancia” desborda el objetivo de activar conocimientos previos y pasa a valoración.',
            },
            b: {
                text: 'Es correcta porque la instrucción explícita “sobre la base de su experiencia” activa saberes previos: el estudiante parte de lo que ya conoce antes de formalizar.',
            },
            c: {
                text: 'Es incorrecta porque plantear “cuestionarse” sus conocimientos busca producir choque entre lo que cree y la evidencia, que es otro proceso (conflicto cognitivo).',
            },
        },
    },
];

export default block_15_16;
