'use client'
import { useState } from 'react'
import ProgressBar from '@/components/ProgressBar'

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
        <div className="section">
            <h1>clock</h1>
            <button className="timer" onClick={handleClick}>
                <p className="count">{!started ? 'Start' : pause ? '❚❚' : display}</p>
            </button>
            <br />
            <ProgressBar progress={progress} />
        </div>
    )
}
