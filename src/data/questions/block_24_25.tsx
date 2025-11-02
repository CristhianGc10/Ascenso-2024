import type { Question } from './index';

const block_24_25: Question[] = [
    {
        id: 24,
        stemBlockId: '24-25',
        text: (
            <>
                A partir de la situación, ¿cuál de las siguientes preguntas es
                coherente con la indagación propuesta?
            </>
        ),
        options: {
            a: '¿De qué manera influye la temperatura del agua en la altura que alcanzan los huevos introducidos en un vaso con agua y sal?',
            b: '¿De qué manera cambia la altura que alcanzan los huevos al ser introducidos en vasos con diferente volumen de agua?',
            c: '¿De qué manera afecta la masa de sal diluida en el vaso de agua en la altura que alcanzan los huevos introducidos?',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque pregunta por un fenómeno distinto (cambio de estado), no sobre la relación entre la masa de sal disuelta y la altura que alcanza el huevo.',
            },
            b: {
                text: 'Es incorrecta porque observa la altura, pero no la vincula a la variable que se manipuló (masa de sal); así no se contrasta la hipótesis.',
            },
            c: {
                text: 'Es correcta porque pone en foco la variable independiente (masa de sal) y su efecto en la altura lograda, que es lo que la indagación quiso probar.',
            },
        },
    },
    {
        id: 25,
        stemBlockId: '24-25',
        text: (
            <>
                Una estudiante comentó, en plenaria, que está muy interesada en
                volver a realizar la experiencia. Esta vez, la realizará en casa
                y, en lugar de usar huevos de gallina, usará huevos de codorniz
                para los 3 vasos. ¿Qué tipo de variable se cambiará en esta
                nueva experiencia?
            </>
        ),
        options: {
            a: 'La variable independiente.',
            b: 'La variable dependiente.',
            c: 'La variable control.',
        },
        explanations: {
            a: {
                text: 'Es incorrecta porque sugiere que el “tipo de huevo” pasó a ser variable independiente, pero el planteamiento indica que todos los huevos serán iguales (de codorniz), por lo que queda controlada.',
            },
            b: {
                text: 'Es incorrecta porque tratarla como “dependiente” confunde roles: no se está midiendo un efecto sobre el tipo de huevo; el tipo se mantiene.',
            },
            c: {
                text: 'Es correcta porque cuando todo el lote se cambia por otro tipo igual para todos, ese factor deja de variar y se convierte en variable de control.',
            },
        },
    },
];

export default block_24_25;
