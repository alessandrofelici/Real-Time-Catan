'use client'
import { useState, useEffect } from 'react'

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
    const barWidth = playerNumbers.length * 110

    return (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
            <div className="bg-on-surface rounded-[2rem] p-8 flex flex-col items-center gap-6 shadow-2xl">
                <div className="flex gap-6">
                    {playerNumbers.map((num) => (
                        <div
                            key={num}
                            className="text-4xl font-black text-white w-16 h-16 flex justify-center items-center font-headline"
                            style={{
                                visibility: phase === 'selected' && num !== selected ? 'hidden' : 'visible',
                            }}
                        >
                            {num}
                        </div>
                    ))}
                </div>
                <div className="relative" style={{ width: barWidth }}>
                    <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-white rounded-full"
                            style={{
                                width: `${progress * 100}%`,
                                transition: 'width 0.1s linear',
                            }}
                        />
                    </div>
                    <div
                        className="absolute top-[-4px] w-[3px] h-7 bg-primary-container"
                        style={{ left: '50%', transform: 'translateX(-50%)' }}
                    />
                </div>
            </div>
        </div>
    )
}
