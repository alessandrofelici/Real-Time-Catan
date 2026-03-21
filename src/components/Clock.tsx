'use client'
import { useState } from 'react'

type ClockProps = {
    time: number
    maxTenths: number
    pause: boolean
    onPause: () => void
}

export default function Clock({ time, maxTenths, pause, onPause }: ClockProps) {
    const [started, setStarted] = useState(false)

    function handleClick() {
        if (!started) setStarted(true)
        onPause()
    }

    const seconds = Math.floor(time / 10)
    const tenths = time % 10
    const display = `${seconds}.${tenths}`
    const progress = maxTenths > 0 ? time / maxTenths : 0

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-3">
                <span className="w-1.5 h-8 bg-primary-container rounded-full"></span>
                <h2 className="text-3xl font-black tracking-tighter uppercase font-headline text-on-surface">CLOCK</h2>
            </div>
            <button
                onClick={handleClick}
                className="bg-primary aspect-[4/5] lg:aspect-[3/4] rounded-[2rem] flex flex-col items-center justify-center relative overflow-hidden shadow-2xl shadow-primary/20 w-full cursor-pointer border-none"
            >
                <span className="font-black text-white leading-none tracking-tighter text-6xl font-headline">
                    {!started ? 'Start' : pause ? '❚❚' : display}
                </span>
                <div className="absolute bottom-0 left-0 w-full h-8 bg-black/10">
                    <div
                        className="h-full bg-white rounded-r-full"
                        style={{
                            width: `${Math.min(progress * 100, 100)}%`,
                            transition: 'width 0.1s linear',
                        }}
                    />
                </div>
            </button>
        </div>
    )
}
