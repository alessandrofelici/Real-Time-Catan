'use client'

type AboutModalProps = {
    onClose: () => void
}

const steps = [
    { title: 'Set Up', body: 'Enter a roll timer (seconds per turn) and your player count (3–6) on the options screen.' },
    { title: 'Roll Phase', body: 'The timer counts down. When it hits zero, the dice roll automatically and the result is shown.' },
    { title: 'Speedup Start', body: 'When enabled, the first few turns use a shorter timer so the game gets going faster.' },
    { title: 'The Robber', body: 'Rolling a 7 triggers the robber. A random player number is selected — that player must move the robber.' },
    { title: 'End Game', body: 'Press the restart button at any time to return to the options screen and start a new game.' },
]

export default function AboutModal({ onClose }: AboutModalProps) {
    return (
        <div
            className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
            onClick={onClose}
        >
            <div
                className="formBox"
                style={{ gap: 0, maxWidth: 520, width: '90vw' }}
                onClick={(e) => e.stopPropagation()}
            >
                <h2
                    style={{
                        fontFamily: 'var(--font-headline), sans-serif',
                        fontSize: 24,
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        letterSpacing: '-0.03em',
                        color: '#ac2c00',
                        marginBottom: 24,
                        alignSelf: 'flex-start',
                    }}
                >
                    How to Play
                </h2>
                <ol style={{ listStyle: 'none', padding: 0, margin: 0, width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {steps.map((step, i) => (
                        <li key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                            <span
                                style={{
                                    minWidth: 28,
                                    height: 28,
                                    borderRadius: '50%',
                                    background: '#ac2c00',
                                    color: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontFamily: 'var(--font-headline), sans-serif',
                                    fontWeight: 900,
                                    fontSize: 14,
                                    marginTop: 1,
                                }}
                            >
                                {i + 1}
                            </span>
                            <div>
                                <span
                                    style={{
                                        fontFamily: 'var(--font-headline), sans-serif',
                                        fontWeight: 800,
                                        fontSize: 15,
                                        textTransform: 'uppercase',
                                        letterSpacing: '-0.02em',
                                        color: '#2c2f30',
                                    }}
                                >
                                    {step.title}
                                </span>
                                <p
                                    style={{
                                        margin: '2px 0 0',
                                        fontFamily: 'var(--font-body), Manrope, sans-serif',
                                        fontWeight: 500,
                                        fontSize: 14,
                                        color: '#555',
                                        textTransform: 'none',
                                        letterSpacing: 'normal',
                                    }}
                                >
                                    {step.body}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
                <button
                    onClick={onClose}
                    style={{
                        marginTop: 28,
                        width: '100%',
                        maxWidth: 400,
                        padding: '10px 0',
                        backgroundColor: '#ac2c00',
                        color: 'white',
                        border: 'none',
                        borderRadius: 10,
                        fontSize: 16,
                        fontWeight: 800,
                        fontFamily: 'var(--font-headline), sans-serif',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        cursor: 'pointer',
                    }}
                >
                    Got it
                </button>
            </div>
        </div>
    )
}
