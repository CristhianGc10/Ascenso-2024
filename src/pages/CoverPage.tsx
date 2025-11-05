// src/pages/CoverPage.tsx

import React from 'react';

type Props = {
    isSignedIn: boolean;
    displayName: string | null;
    canStart: boolean; // sesión + nombre != ''
    onOpenLogin: () => void; // abrir modal Google
    onSignOut: () => void; // cerrar sesión
    onStart: () => void; // iniciar examen
    onOpenHistory: () => void; // ver historial
    onSetName: (name: string) => void; // guardar nombre (local + metadata si hay sesión)
};

export default function CoverPage({
    isSignedIn,
    displayName,
    canStart,
    onOpenLogin,
    onSignOut,
    onStart,
    onOpenHistory,
    onSetName,
}: Props) {
    const [editing, setEditing] = React.useState(false);
    const [draft, setDraft] = React.useState(displayName ?? '');

    // Sincroniza el borrador con el nombre actual
    React.useEffect(() => {
        setDraft(displayName ?? '');
    }, [displayName]);

    // Entrar a editar sólo por clic/toque
    const startEdit = () => {
        if (!isSignedIn) return; // sólo editable si hay sesión
        setEditing(true);
    };

    const saveName = () => {
        const v = draft.trim();
        if (!v) return; // no guardar vacío
        onSetName(v);
        setEditing(false);
    };

    const onBlurInput = () => {
        const v = draft.trim();
        if (v) {
            onSetName(v);
            setEditing(false);
        } // si queda vacío, seguimos mostrando el prompt sin activar "Iniciar"
    };

    const cancelEdit = () => {
        setDraft(displayName ?? '');
        setEditing(false);
    };

    // Vistas del saludo
    const greeting = !isSignedIn ? (
        'Hola, inicie sesión por favor'
    ) : editing ? (
        <>
            {/* Modo edición después de click */}
            Hola, ingrese su nombre
            <div style={{ marginTop: 8 }}>
                <input
                    className="input"
                    style={{ width: 260 }}
                    placeholder="Tu nombre"
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onBlur={onBlurInput}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') saveName();
                        if (e.key === 'Escape') cancelEdit();
                    }}
                    autoFocus
                />
            </div>
        </>
    ) : displayName && displayName.trim() ? (
        // Con sesión y nombre: mostrar nombre (clic para editar). Sin subrayado ni puntos.
        <>
            Hola,{' '}
            <span
                role="button"
                tabIndex={0}
                onClick={startEdit}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') startEdit();
                }}
                style={{ cursor: 'pointer' }} // <- sin text-decoration
                title="Haz clic para editar tu nombre"
            >
                {displayName.trim()}
            </span>
        </>
    ) : (
        // Con sesión pero sin nombre: mostrar prompt clicable (sin subrayados)
        <>
            Hola,{' '}
            <span
                role="button"
                tabIndex={0}
                onClick={startEdit}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') startEdit();
                }}
                style={{ cursor: 'pointer' }} // <- limpio, sin línea punteada
                title="Haz clic para ingresar tu nombre"
            >
                ingrese su nombre
            </span>
        </>
    );

    return (
        <div className="app-cover" tabIndex={0}>
            <div className="app-cover-inner" style={{ textAlign: 'center' }}>
                <h1 className="app-cover-title">
                    Concurso Ascenso Educación Básica - 2024
                </h1>

                <div className="meta" style={{ marginTop: 12 }}>
                    {greeting}
                </div>

                {/* Botones principales (mismo estilo del proyecto) */}
                <div
                    style={{
                        marginTop: 16,
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 12,
                        flexWrap: 'wrap',
                    }}
                >
                    <button
                        className="btn"
                        type="button"
                        onClick={isSignedIn ? onSignOut : onOpenLogin}
                        title={
                            isSignedIn
                                ? 'Cerrar sesión'
                                : 'Inicia sesión con Google'
                        }
                    >
                        {isSignedIn ? 'Cerrar sesión' : 'Inicia sesión'}
                    </button>

                    <button
                        className="btn"
                        type="button"
                        onClick={onStart}
                        disabled={!canStart}
                        title={
                            !canStart
                                ? isSignedIn
                                    ? 'Ingrese su nombre'
                                    : 'Inicia sesión con Google'
                                : 'Iniciar'
                        }
                    >
                        Iniciar
                    </button>

                    <button
                        className="btn btn-ghost"
                        type="button"
                        onClick={onOpenHistory}
                    >
                        Revisar
                    </button>
                </div>
            </div>
        </div>
    );
}
