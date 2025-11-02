import type React from 'react';

export const stem_59_60: React.ReactNode = (
    <div>
        <p>
            En una IE, se están planteando mejoras en el menú escolar. En este
            contexto, para realizar algunas propuestas, los estudiantes de sexto
            grado buscan recoger información sobre las preferencias de sus
            compañeros de aula con respecto al menú del desayuno escolar. Luego
            de haber recogido información sobre las preferencias de los
            estudiantes, un equipo ha elaborado la siguiente tabla sobre las
            preferencias en cuanto a las bebidas:
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
                            colSpan={2}
                            style={{
                                textAlign: 'center',
                                padding: '8px 10px',
                                border: '1px solid var(--border)',
                                background: '#f9fafb',
                                fontWeight: 600,
                            }}
                        >
                            ¿Qué bebida te gusta más?
                        </th>
                    </tr>
                    <tr>
                        <th
                            style={{
                                textAlign: 'center',
                                padding: '8px 10px',
                                border: '1px solid var(--border)',
                                background: '#f9fafb',
                            }}
                        >
                            Bebidas
                        </th>
                        <th
                            style={{
                                textAlign: 'center',
                                padding: '8px 10px',
                                border: '1px solid var(--border)',
                                background: '#f9fafb',
                            }}
                        >
                            Total
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        ['Ponche de habas', '4'],
                        ['Avena con leche', '5'],
                        ['Kiwicha con leche', '7'],
                        ['Sémola con leche', '3'],
                        ['Quinua con manzana', '8'],
                    ].map(([bev, tot]) => (
                        <tr key={bev}>
                            <td
                                style={{
                                    textAlign: 'left',
                                    padding: '8px 10px',
                                    border: '1px solid var(--border)',
                                }}
                            >
                                {bev}
                            </td>
                            <td
                                style={{
                                    textAlign: 'center',
                                    padding: '8px 10px',
                                    border: '1px solid var(--border)',
                                }}
                            >
                                {tot}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <p style={{ marginTop: 10 }}>
            A partir de esta tabla, los integrantes del equipo sostuvieron el
            siguiente diálogo:
        </p>
        <div className="card" style={{ backgroundColor: '#ebebeb' }}>
            <p>
                Jaime dice: "Miren, para hacer el gráfico estadístico… tenemos
                que dibujar 5 barras porque hay 5 bebidas".
            </p>
            <p>
                Pierina dice: "Sí. Además, quizás sería bueno ordenarlas de
                mayor a menor o al revés para compararlas".
            </p>
            <p>
                Arturo dice: "Puede ser. Lo importante es que se note la
                diferencia de tamaño en las barras. Además, también debemos
                colocar el nombre de cada bebida debajo de cada barra".
            </p>
            <p>
                Anabel dice: "Pero los nombres son muy grandes. Mejor pongamos
                un dibujo para simbolizarlos".
            </p>
            <p>
                Arturo dice: "¡Ya sé! Solo pongamos la palabra más importante.
                Por ejemplo, solo pongamos 'habas' y ya no 'ponche de habas'".
            </p>
            <p>
                Pierina dice: "¡Está bien! Con eso ya tenemos todo lo que
                necesitamos para el gráfico".
            </p>
        </div>
    </div>
);
