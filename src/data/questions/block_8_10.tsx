import type { Question } from './index';

const block_8_10: Question[] = [
    {
        id: 8,
        stemBlockId: '8-10',
        text: (
            <>
                Como parte del acompañamiento del proceso de escritura, la
                docente ofrece algunas recomendaciones a los estudiantes. ¿Cuál
                de las siguientes recomendaciones{' '}
                <strong>
                    <u>es adecuada</u>
                </strong>{' '}
                para promover el proceso de{' '}
                <strong>
                    <u>planificación</u>
                </strong>{' '}
                de un texto escrito?
            </>
        ),
        options: {
            a: '“Tengan claro a quiénes estarán dirigidas las cartas cuando pidan las donaciones”.',
            b: '“Verifiquen que el uso del punto ayude a delimitar con claridad las ideas del texto”.',
            c: '“Implementen las mejoras ortográficas que sean necesarias para facilitar la comprensión del texto”.',
        },
        explanations: {
            a: {
                text: 'Es correcta porque la planificación de una carta pide definir destinatario, propósito y contenido general. Preguntar “a quién” va la carta es nuclear para planificar.',
            },
            b: {
                text: 'Es incorrecta porque revisar el uso del punto corresponde a textualización y/o corrección posterior.',
            },
            c: {
                text: 'Es incorrecta porque atender ortografía es parte de revisión/corrección, etapa final.',
            },
        },
    },
    {
        id: 9,
        stemBlockId: '8-10',
        text: (
            <>
                Los integrantes de un equipo han culminado la primera versión de
                su carta y le han pedido a la docente que los ayude con su
                revisión. A continuación, se presenta dicha carta:
                <div
                    className="card"
                    style={{ marginTop: 8, backgroundColor: '#ebebeb' }}
                >
                    <p style={{ textAlign: 'right' }}>6/8/2024</p>
                    <p>Direc. Víctor</p>
                    <p>
                        Reciba nuestros más cordiales saludos. Hoy le escribimos
                        esta carta para comunicar que nos ayude con los gatitos
                        y perritos abandonados porque necesitan nuestro apoyo.
                    </p>
                    <p>
                        En primer lugar, usted puede apoyarnos, porque los
                        animales son seres vivos y muy importantes y usted sabe
                        que las personas se preocupan por ellos, por lo que le
                        pedimos que nos apoye en esto.
                    </p>
                    <p>
                        Entonces, usted como persona buenita debería ayudarnos
                        en esto porque no es bonito que los animalitos estén
                        abandonados. Como dijimos ojalá pueda ayudarnos.
                    </p>
                    <p>Chau,</p>
                    <p style={{ textAlign: 'right' }}>
                        Los chicos de quinto grado
                    </p>
                </div>
                La docente busca orientar a los estudiantes en la mejora de su
                escrito. ¿Cuál de los siguientes aspectos de escritura debe{' '}
                <strong>
                    <u>priorizar</u>
                </strong>{' '}
                en su revisión?
            </>
        ),
        options: {
            a: 'La falta de adecuación del léxico según el destinatario.',
            b: 'La falta de variedad de conectores en el texto.',
            c: 'La falta de desarrollo de los argumentos.',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque la adecuación trata de ajustar registro y propósito, pero si el hilo lógico (coherencia) falla, el texto no se entiende.',
            },
            b: {
                text: 'Es incorrecta porque la cohesión (conectores) ilvana la superficie; sin ideas bien organizadas, los conectores no corrigen el fondo.',
            },
            c: {
                text: 'Es correcta porque “desarrollo de los argumentos” pertenece a la coherencia: que las ideas sostengan la tesis y se encadenen con sentido. Entre propiedades del texto, la coherencia es prioritaria.',
            },
        },
    },
    {
        id: 10,
        stemBlockId: '8-10',
        text: (
            <>
                Otro equipo de estudiantes escribió lo siguiente:
                <div
                    className="card"
                    style={{ marginTop: 8, backgroundColor: '#ebebeb' }}
                >
                    <p>Hola enfermero Patricio</p>
                    <p>
                        Esperamos que se encuentre bien y que todo vaya bien en
                        la posta médica. Le cuento que los animalitos del
                        albergue de la localidad necesitan ayuda. Por eso,
                        buscamos su apoyo. Podemos ayudar de diferentes maneras.
                        Le cuento que estos animalitos son rescatados de las
                        calles y encuentran un hogar y nuevos amigos en ese
                        albergue. Los señores encargados del albergue son buenas
                        personas, ellos se encargan de curar las heridas de los
                        animalitos que llegan heridos. La vez que los visitamos
                        nos presentaron a una gata de ojos grandes, de pelo
                        color blanco, muy blanco y muy graciosa. Pudimos verla
                        jugar con una pelota de trapo que estaba cerca de ella.
                        Fue divertido conocer a esta gatita.
                    </p>
                    <p>Por favor, esperamos que todo le vaya bien.</p>
                    <p>Equipo de quinto grado</p>
                </div>
                La docente busca orientar a los integrantes del equipo para que
                noten el desvío del propósito comunicativo de su texto. ¿Cuál de
                las siguientes acciones pedagógicas es{' '}
                <strong>
                    <u>más</u>
                </strong>{' '}
                adecuada para ello?
            </>
        ),
        options: {
            a: 'Preguntarles qué ideas creen que son imprescindibles en su carta para solicitar ayuda para el albergue. Luego, indicarles qué ideas de las mencionadas pueden usar según el propósito de su texto.',
            b: 'Pedirles que indiquen el propósito de su texto. Luego, solicitarles que lo relean y determinen si la inclusión de la anécdota de la gatita mencionada en el texto contribuye con el desarrollo de dicho propósito.',
            c: 'Comentarles que el propósito de la carta es justificar la importancia de brindar ayuda al albergue. Luego, decirles que hay información en su texto que es necesario cambiar para que se corresponda con dicho propósito.',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque “indicarles qué ideas usar” sustituye el análisis del alumno por instrucciones del docente.',
            },
            b: {
                text: 'Es correcta porque hace releer y pide que ellos mismos indiquen el propósito. Así vuelven al encargo y corrigen el desvío con acciones del estudiante, no del docente.',
            },
            c: {
                text: 'Es incorrecta porque el docente anuncia tanto el propósito como los problemas, anulando la revisión activa del estudiante.',
            },
        },
    },
];

export default block_8_10;
