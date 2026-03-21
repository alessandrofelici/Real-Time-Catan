'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Options() {
    const router = useRouter()
    const [timer, setTimer] = useState('')
    const [count, setCount] = useState('')

    function handleStart() {
        const timerNum = parseInt(timer)
        const countNum = parseInt(count)

        if (isNaN(timerNum) || timerNum < 1 || timerNum > 99) {
            alert('Enter a valid timer (1-99)')
            return
        }
        if (isNaN(countNum) || countNum < 3 || countNum > 6) {
            alert('Enter a valid player count (3-6)')
            return
        }

        router.push(`/game?timer_num=${timerNum}&count_num=${countNum}`)
    }

    return (
        <div className="inputPage">
            <div className="formBox">
                <p>Roll Timer</p>
                <input
                    className="textArea"
                    type="number"
                    min={1}
                    max={99}
                    placeholder="Enter a number in seconds"
                    onChange={(e) => setTimer(e.target.value)}
                />
                <p>Player Count</p>
                <input
                    className="textArea"
                    type="number"
                    min={3}
                    max={6}
                    placeholder="Enter a number 3-6"
                    onChange={(e) => setCount(e.target.value)}
                />
                <br />
                <br />
                <button onClick={handleStart}>
                    Start
                </button>
            </div>
        </div>
    )
}
