import type { OptionKey, Question } from '../data/questions';

import React from 'react';
import StemWindow from './StemWindow';
import type { StemsMap } from '../data/stems';

type Props = {
    q: Question;
    stems: StemsMap;
    order: number;
    selected: OptionKey | null; // estado controlado
    onSelect: (k: OptionKey) => void; // cambia la selección
};

// Separador inline sin CSS global
function Sep() {
    return (
        <hr
            aria-hidden="true"
            role="separator"
            style={{
                border: 0,
                borderTop: '1px solid #d0d7de',
                margin: '12px 0',
                height: 0,
                boxSizing: 'border-box',
            }}
        />
    );
}

export default function QuestionCard({
    q,
    stems,
    order,
    selected,
    onSelect,
}: Props) {
    const [openStem, setOpenStem] = React.useState(false);
    const [showExpl, setShowExpl] = React.useState(false);

    const hasSharedStem = !!q.stemBlockId;
    const stemNode = hasSharedStem ? stems[q.stemBlockId!] : q.stem;

    // al cambiar de pregunta, ocultar explicación
    React.useEffect(() => {
        setShowExpl(false);
    }, [q.id]);

    const onPick = (k: OptionKey) => onSelect(k);

    return (
        <article className="card">
            <div className="row" style={{ justifyContent: 'space-between' }}>
                <div className="meta">Pregunta {order}</div>
                {hasSharedStem && (
                    <button
                        className="btn btn-ghost btn-small"
                        onClick={() => setOpenStem(true)}
                    >
                        Ver enunciado
                    </button>
                )}
            </div>

            <Sep />

            {!hasSharedStem && stemNode && (
                <>
                    {/* Solo un separador arriba. Evita duplicados consecutivos. */}
                    <div style={{ marginTop: 6, textAlign: 'justify' }}>
                        {stemNode as React.ReactNode}
                    </div>
                </>
            )}

            <div
                style={{ marginTop: 12, marginBottom: 6, textAlign: 'justify' }}
            >
                {q.text}
            </div>

            <Sep />

            {(['a', 'b', 'c'] as OptionKey[]).map((k) => {
                const status =
                    typeof q.correct !== 'undefined'
                        ? k === q.correct
                            ? 'Correcto'
                            : 'Incorrecto'
                        : null;

                const statusColor =
                    status === 'Correcto'
                        ? '#1a7f37' // verde
                        : status === 'Incorrecto'
                        ? '#d1242f' // rojo
                        : undefined;

                return (
                    <div
                        key={k}
                        className={`option ${selected === k ? 'selected' : ''}`}
                        role="radio"
                        aria-checked={selected === k}
                        tabIndex={0}
                        onClick={() => onPick(k)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') onPick(k);
                        }}
                    >
                        <div className="option-key">{k}</div>
                        <div className="option-body">
                            <div>{q.options[k]}</div>
                        </div>

                        {showExpl && selected === k && (
                            <div
                                className="explain-pop"
                                role="dialog"
                                aria-label={`Explicación ${k}`}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="explain-pop-head">
                                    <strong>
                                        Explicación
                                        {status && (
                                            <span
                                                style={{
                                                    fontWeight: 700,
                                                    marginLeft: 6,
                                                    color: statusColor,
                                                }}
                                            >
                                                — {status}
                                            </span>
                                        )}
                                    </strong>
                                    <button
                                        className="btn btn-ghost btn-small btn-icon"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setShowExpl(false);
                                        }}
                                        aria-label="Cerrar explicación"
                                        title="Cerrar explicación"
                                    >
                                        ✕
                                    </button>
                                </div>

                                <div className="explain-pop-body">
                                    {q.explanations[k].text}
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}

            <div className="row" style={{ marginTop: 12 }}>
                <button
                    className="btn btn-ghost"
                    disabled={!selected}
                    onClick={() => setShowExpl((v) => !v)}
                >
                    {showExpl ? 'Ocultar explicación' : 'Ver explicación'}
                </button>
            </div>

            {hasSharedStem && (
                <StemWindow
                    title={
                        q.stemBlockId === '1-3'
                            ? 'Lea la siguiente situación y responda las preguntas 1, 2 y 3.'
                            : q.stemBlockId === '4-7'
                            ? 'Lea la siguiente situación y responda las preguntas 4, 5, 6 y 7.'
                            : q.stemBlockId === '8-10'
                            ? 'Lea la siguiente situación y responda las preguntas 8, 9 y 10.'
                            : q.stemBlockId === '13-14'
                            ? 'Lea la siguiente situación y responda las preguntas 13 y 14.'
                            : q.stemBlockId === '17-19'
                            ? 'Lea la siguiente situación y responda las preguntas 17, 18 y 19.'
                            : q.stemBlockId === '24-25'
                            ? 'Lea la siguiente situación y responda las preguntas 24 y 25.'
                            : q.stemBlockId === '29-30'
                            ? 'Lea la siguiente situación y responda las preguntas 29 y 30.'
                            : q.stemBlockId === '32-33'
                            ? 'Lea la siguiente situación y responda las preguntas 32 y 33.'
                            : q.stemBlockId === '36-38'
                            ? 'Lea la siguiente situación y responda las preguntas 36, 37 y 38.'
                            : q.stemBlockId === '46-48'
                            ? 'Lea la siguiente situación y responda las preguntas 46, 47 y 48.'
                            : q.stemBlockId === '53-54'
                            ? 'Lea la siguiente situación y responda las preguntas 53 y 54.'
                            : q.stemBlockId === '55-56'
                            ? 'Lea la siguiente situación y responda las preguntas 55 y 56.'
                            : q.stemBlockId === '57-58'
                            ? 'Lea la siguiente situación y responda las preguntas 57 y 58.'
                            : q.stemBlockId === '59-60'
                            ? 'Lea la siguiente situación y responda las preguntas 59 y 60.'
                            : 'Enunciado'
                    }
                    content={stemNode as React.ReactNode}
                    isOpen={openStem}
                    onClose={() => setOpenStem(false)}
                />
            )}
        </article>
    );
}
