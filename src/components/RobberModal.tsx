'use client'
import { useState, useEffect } from 'react'
import ProgressBar from '@/components/ProgressBar'

type RobberModalProps = {
    players: number
    selected: number
    onComplete: () => void
}

const ROLLING_DURATION = 5000
const SELECTED_DURATION = 5000
const TICK = 100

export default function RobberModal({ players, selected, onComplete }: RobberModalProps) {
    const [phase, setPhase] = useState<'rolling' | 'selected'>('rolling')
    const [elapsed, setElapsed] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setElapsed((prev) => prev + TICK)
        }, TICK)

        const rollingTimer = setTimeout(() => {
            setPhase('selected')
        }, ROLLING_DURATION)

        const completeTimer = setTimeout(() => {
            onComplete()
        }, ROLLING_DURATION + SELECTED_DURATION)

        return () => {
            clearInterval(intervalId)
            clearTimeout(rollingTimer)
            clearTimeout(completeTimer)
        }
    }, [onComplete])

    const totalDuration = ROLLING_DURATION + SELECTED_DURATION
    const progress = Math.min(elapsed / totalDuration, 1)
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
                flexDirection: 'column',
                alignItems: 'center',
                gap: 20,
            }}>
                <div style={{ display: 'flex', gap: 30 }}>
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
                <div style={{ position: 'relative', width: playerNumbers.length * 110 }}>
                    <ProgressBar progress={progress} width={playerNumbers.length * 110} color="white" />
                    <div style={{
                        position: 'absolute',
                        top: -4,
                        left: '50%',
                        width: 3,
                        height: 28,
                        backgroundColor: '#f1d089',
                        transform: 'translateX(-50%)',
                    }} />
                </div>
            </div>
        </div>
    )
}
