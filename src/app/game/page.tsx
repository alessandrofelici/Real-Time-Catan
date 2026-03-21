'use client'
import { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'

export default function Home() {
    const searchParams = useSearchParams()
    const maxTime = Number(searchParams.get('timer_num'))
    const players = Number(searchParams.get('count_num'))
    const [time, setTime] = useState(0)
    const [pause, setPause] = useState(false)
    const [robber, setRobber] = useState(0)
    const [value, setValue] = useState(0)
    const [history, setHistory] = useState(Array(5).fill(null))
    const [histRobber, setHistRobber] = useState(Array(5).fill(null))

    const handleSeven = useCallback(() => {
        setHistRobber((prev) => [...prev.slice(1, 6), robber])
        setRobber(Math.floor(Math.random() * players) + 1)
    }, [robber, players])

    const handleRoll = useCallback(() => {
        if (value !== 0) {
            setHistory((prev) => [...prev.slice(1, 6), value])
        }
        const dice =
            Math.floor(Math.random() * 6) + 1 +
            Math.floor(Math.random() * 6) + 1
        setValue(dice)
    }, [value])

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!pause) {
                if (time === maxTime) {
                    setTime(0)
                    if (value === 7) handleSeven()
                    handleRoll()
                } else {
                    setTime(time + 1)
                }
            }
        }, 1000)

        return () => clearInterval(intervalId)
    }, [pause, time, maxTime, value, handleSeven, handleRoll])

    function handlePause() {
        setPause(!pause)
    }

    const historyReversed = history.toReversed()
    const rolls = historyReversed.map((entry, index) => {
        return <li key={index}>{entry}</li>
    })

    const histRobberReversed = histRobber.toReversed()
    const robbers = histRobberReversed.map((entry, index) => {
        if (entry !== null) return <li key={index}>Player {entry}</li>
    })

    return (
        <div className="mainPage">
            <div className="section">
                <h1>rolls</h1>
                <p>Most Recent: {value}</p>
                <br />
                <p>Previous Rolls:</p>
                <ul>{rolls}</ul>
            </div>
            <div className="section">
                <h1>clock</h1>
                <button className="timer" onClick={handlePause}>
                    <p className="count">{pause ? '❚❚' : time}</p>
                </button>
            </div>
            <div className="section">
                <h1>robber</h1>
                <p>Player {robber}</p>
                <ol>{robbers}</ol>
            </div>
        </div>
    )
}
