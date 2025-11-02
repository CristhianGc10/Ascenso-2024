import type { Question } from './index';

const block_29_30: Question[] = [
    {
        id: 29,
        stemBlockId: '29-30',
        text: (
            <>
                En la hipótesis planteada por los estudiantes, ¿cuál es la
                variable{' '}
                <strong>
                    <u>dependiente</u>
                </strong>
                ?
            </>
        ),
        options: {
            a: 'La cantidad de manzanas que se use en el experimento.',
            b: 'El tipo de líquido que se echará en las manzanas cortadas.',
            c: 'El tiempo que tardarán las manzanas cortadas en cambiar de color.',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque “cantidad de jugo” ni aparece en la hipótesis y llevaría a otro diseño.',
            },
            b: {
                text: 'Es incorrecta porque “tipo de líquido” (limón vs agua) es lo que se cambia intencionalmente; es la independiente.',
            },
            c: {
                text: 'Es correcta porque el tiempo que demora en oscurecer la pulpa es justamente lo que se observa y mide para decidir si hubo o no efecto: eso define a la dependiente.',
            },
        },
    },
    {
        id: 30,
        stemBlockId: '29-30',
        text: (
            <>
                A partir de la hipótesis planteada, el equipo elabora propuestas
                de indagación para comprobarla. ¿Cuál de las siguientes
                propuestas es adecuada para ello?
            </>
        ),
        options: {
            a: 'Usar tres mitades de manzana de iguales características y ubicarlas en lugares con las mismas condiciones. Luego, echar, en volúmenes iguales, jugo de limón en la pulpa de una de las mitades; en otra mitad, agua; y, en la tercera mitad, no echar ningún líquido. Después, observar las tres mitades y registrar el tiempo de la pulpa que se oscurece primero.',
            b: 'Emplear tres mitades de manzanas de iguales características y ubicarlas en un mismo lugar. Luego, en la pulpa de una mitad, echar jugo de limón; en otra mitad, echar agua en menor volumen que el jugo de limón; y, en la última mitad, no echar ningún líquido. Después, observar las tres mitades y registrar el tiempo de la pulpa que se oscurece primero.',
            c: 'Conseguir tres mitades de manzanas de iguales características y ubicarlas en diferentes ambientes. Luego, echar, en volúmenes iguales, jugo de limón en la pulpa de una mitad; en la otra mitad, agua; y, en la tercera mitad de la manzana, no echar ningún líquido. Después, observar las tres mitades y registrar el tiempo de la pulpa que se oscurece primero.',
        },
        explanations: {
            a: {
                text: 'Es correcta porque mantiene una sola diferencia (jugo/agua) y controla todo lo demás (mismas mitades, mismas condiciones, mismos volúmenes), lo que permite atribuir el efecto al líquido.',
            },
            b: {
                text: 'Es incorrecta porque introduce “menor volumen” en un grupo: agrega otra diferencia y rompe el control de variables.',
            },
            c: {
                text: 'Es incorrecta porque pone las mitades en ambientes diferentes, sumando otra variable y anulando la comparación justa.',
            },
        },
    },
];

export default block_29_30;
