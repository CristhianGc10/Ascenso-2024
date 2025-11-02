import type { Question } from './index';

const block_32_33: Question[] = [
    {
        id: 32,
        stemBlockId: '32-33',
        text: (
            <>
                Durante la actividad, la docente pide a los estudiantes que
                presenten algunas fotos que incluirán en sus álbumes y compartan
                algunos comentarios sobre estas. ¿En cuál de las siguientes
                intervenciones de los estudiantes se evidencia la noción de
                simultaneidad?
            </>
        ),
        options: {
            a: 'Leo dice: “En esta foto, estoy con mis primos jugando en un charco bien grande. De chiquito, me gustaba saltar en los charcos y, cada vez que puedo, lo sigo haciendo; aunque ya no salto charcos tan grandes porque me puedo mojar mucho”.',
            b: 'Cecilia dice: “Esta foto es de cuando tenía tres años y estoy con mi familia en la playa. Aquí se ve que mi papá está jugando conmigo en la arena, mientras que, detrás de nosotros, se ve a mi mamá entrando al mar”.',
            c: 'Andrés dice: “En esta foto, estoy con mis tíos en mi casa. Recuerdo que ese día, primero, fuimos a pastear a las ovejas tempranito y, más tarde, comimos unas ricas truchas con papa y arroz”.',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque describe una sola escena/espacio; no hay dos acciones en lugares distintos a la vez.',
            },
            b: {
                text: 'Es correcta porque muestra dos acciones simultáneas en lugares diferentes (papá en la arena / mamá entrando al mar), cumpliendo el criterio de simultaneidad contextual.',
            },
            c: {
                text: 'Es incorrecta porque indica momentos sucesivos (“temprano” y “más tarde”), no simultáneos.',
            },
        },
    },
    {
        id: 33,
        stemBlockId: '32-33',
        text: (
            <>
                Una vez que los estudiantes han terminado de pegar las fotos en
                sus álbumes, la docente busca promover en ellos la construcción
                de la identidad personal. ¿Cuál de las siguientes acciones
                pedagógicas es{' '}
                <strong>
                    <u>más</u>
                </strong>{' '}
                adecuada para favorecer dicho propósito?
            </>
        ),
        options: {
            a: 'Indicar a los estudiantes que, en su álbum, señalen quiénes conforman su familia y comenten qué actividades les gusta realizar con ellos. Luego, invitarlos a que compartan sus álbumes y comenten por qué les gusta hacer las actividades mencionadas con su familia.',
            b: 'Pedir a los estudiantes que, en su álbum, incluyan otras fotos de diferentes momentos con los miembros de su familia. Luego, invitarlos a que compartan sus álbumes y comenten qué acciones podrían haber realizado para que dichos momentos fueran más divertidos.',
            c: 'Solicitar a los estudiantes que, en su álbum, indiquen qué actividades estaban realizando en las fotos, quiénes aparecen y dónde están. Luego, invitarlos a que compartan sus álbumes y mencionen qué eventos familiares aparecen recurrentemente.',
        },
        explanations: {
            a: {
                text: 'Es correcta porque pone a los estudiantes a expresar gustos y preferencias propias en relación con su familia y actividades; eso construye identidad personal.',
            },
            b: {
                text: 'Es incorrecta porque se centra en eventos familiares genéricos y otras fotos; diluye la voz personal del estudiante.',
            },
            c: {
                text: 'Es incorrecta porque pide identificar qué hacen y dónde en las fotos, pero no indaga qué les gusta y por qué, núcleo de lo identitario.',
            },
        },
    },
];

export default block_32_33;
