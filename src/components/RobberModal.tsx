'use client'
import { useState, useEffect } from 'react'

type RobberModalProps = {
    players: number
    selected: number
    onComplete: () => void
}

const ROLLING_DURATION = 5000
const SELECTED_DURATION = 5000

export default function RobberModal({ players, selected, onComplete }: RobberModalProps) {
    const [phase, setPhase] = useState<'rolling' | 'selected'>('rolling')

    useEffect(() => {
        const rollingTimer = setTimeout(() => {
            setPhase('selected')
        }, ROLLING_DURATION)

        const completeTimer = setTimeout(() => {
            onComplete()
        }, ROLLING_DURATION + SELECTED_DURATION)

        return () => {
            clearTimeout(rollingTimer)
            clearTimeout(completeTimer)
        }
    }, [onComplete])

    const playerNumbers = Array.from({ length: players }, (_, i) => i + 1)

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 100,
        }}>
            <div style={{
                backgroundColor: '#548683',
                borderRadius: 15,
                padding: 40,
                display: 'flex',
                gap: 30,
                alignItems: 'center',
            }}>
                {playerNumbers.map((num) => (
                    <div
                        key={num}
                        style={{
                            fontSize: 48,
                            fontWeight: 'bold',
                            color: 'white',
                            width: 80,
                            height: 80,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            visibility: phase === 'selected' && num !== selected ? 'hidden' : 'visible',
                        }}
                    >
                        {num}
                    </div>
                ))}
            </div>
        </div>
    )
}
