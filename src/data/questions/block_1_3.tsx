import type { Question } from './index';

const block_1_3: Question[] = [
    {
        id: 1,
        stemBlockId: '1-3',
        text: (
            <>
                El docente propone a los estudiantes que intercambien ideas
                sobre los aspectos del texto que llamaron su atención. ¿Cuál de
                los comentarios de los estudiantes evidencia la capacidad de{' '}
                <strong>
                    <u>deducir información</u>
                </strong>{' '}
                del texto?
            </>
        ),
        options: {
            a: 'Julia dice: “Angélica, gracias a su talento y esfuerzo, ha ido mostrando un gran dominio del parataekwondo”.',
            b: 'Amaru dice: “Es importante promover la igualdad de oportunidades para los paratletas; por eso, es necesario dar mayor difusión a casos como el de Angélica”.',
            c: 'Ramiro dice: “Las integrantes del comité convencieron a Angélica de que practicara el deporte de parataekwondo luego de ver sus capacidades en la natación”.',
        },
        explanations: {
            a: {
                text: 'Es correcta porque la afirmación no aparece escrita con esas mismas palabras en el texto, pero se deduce al unir datos que sí están ahí. La conclusión no es una opinión, tampoco repite una oración del texto; es una inferencia coherente con los hechos narrados.',
            },
            b: {
                text: 'Es incorrecta porque introduce una valoración del tipo “es importante…”. Eso cambia de tarea: ya no se trata de extraer o deducir información a partir del texto, sino de opinar sobre él.',
            },
            c: {
                text: 'Es incorrecta porque reproduce información que puede localizarse literalmente en la lectura; no requiere razonamiento adicional.',
            },
        },
    },
    {
        id: 2,
        stemBlockId: '1-3',
        text: (
            <>
                El docente busca seguir trabajando la comprensión del texto con
                los estudiantes. ¿Cuál de las siguientes acciones pedagógicas se
                centra en la obtención de{' '}
                <strong>
                    <u>información explícita</u>
                </strong>{' '}
                del texto?
            </>
        ),
        options: {
            a: 'Solicitarles que elaboren un relato breve sobre la participación de Angélica en los Juegos Paralímpicos de 2020.',
            b: 'Proponerles que, a partir del texto leído, dialoguen sobre cómo el deporte puede aportar en la vida de las personas.',
            c: 'Pedirles que, sobre la base de la información del texto, elaboren una lista de los reconocimientos que Angélica ha obtenido en su carrera.',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque propone escribir un relato breve sobre la participación de Angélica. Ese relato no está en el texto y obliga a inventar o proyectar, no a recuperar información del material dado.',
            },
            b: {
                text: 'Es incorrecta porque pide discutir “cómo aporta el deporte”, lo cual saca al estudiante del texto hacia su opinión personal.',
            },
            c: {
                text: 'Es correcta porque pide elaborar una lista sobre la base del texto, es decir, exige rastrear datos explícitos y organizarlos. No agrega opiniones ni crea contenido nuevo.',
            },
        },
    },
    {
        id: 3,
        stemBlockId: '1-3',
        text: (
            <>
                En otro momento del intercambio de ideas sobre el texto, Tirso,
                un estudiante, comentó lo siguiente: “Creo que el texto trata
                principalmente de que Angélica Espinoza, primero, hacía natación
                y, luego, pasó a practicar parataekwondo”. Ante esto, el docente
                busca ayudar a Tirso a darse cuenta de su error al identificar
                el tema central del texto. ¿Cuál de las siguientes preguntas es{' '}
                <strong>
                    <u>más</u>
                </strong>{' '}
                adecuada para lograr dicho propósito?
            </>
        ),
        options: {
            a: '¿Por qué Angélica Espinoza dejó de hacer natación? ¿Has incorporado ideas sobre los logros de Angélica en el parataekwondo? Entonces, ¿cuál es el tema central del texto?',
            b: '¿Qué experiencias ha tenido Angélica Espinoza? ¿Cuál de ellas se menciona más veces en el texto? ¿Se debe considerar esa información para decir de qué trata principalmente el texto?',
            c: '¿Qué se dice sobre Angélica en cada párrafo del texto? ¿Cuál de estas ideas te ha llamado más la atención? ¿Cómo puedes organizar estas ideas para escribir de qué trata principalmente el texto?',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque una de sus preguntas “levanta” la respuesta al insinuar directamente el contenido (“has incorporado los logros…”), sesgando el proceso.',
            },
            b: {
                text: 'Es correcta porque sus preguntas llevan a encontrar el tema con procedimientos válidos: identificar experiencias mencionadas, detectar recurrencias y usar palabras clave. No sugiere respuestas ni induce opiniones.',
            },
            c: {
                text: 'Es incorrecta porque mezcla una pregunta adecuada con otra que pide opinión (“lo que más te llamó la atención”), lo que no ayuda a delimitar el tema.',
            },
        },
    },
];

export default block_1_3;
