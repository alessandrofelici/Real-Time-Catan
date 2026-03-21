'use client'
import { useState } from 'react'

type ClockProps = {
    time: number
    pause: boolean
    onPause: () => void
}

export default function Clock({ time, pause, onPause }: ClockProps) {
    const [started, setStarted] = useState(false)

    function handleClick() {
        if (!started) setStarted(true)
        onPause()
    }

    const seconds = Math.floor(time / 10)
    const tenths = time % 10
    const display = `${seconds}.${tenths}`

    return (
        <div className="section">
            <h1>clock</h1>
            <button className="timer" onClick={handleClick}>
                <p className="count">{!started ? 'Start' : pause ? '❚❚' : display}</p>
            </button>
        </div>
    )
}
