'use client'
import { useState, useEffect } from 'react'
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

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!pause) {
                if (time == maxTime) {
                    setTime(0)
                    if (value == 7) handleSeven()
                    handleRoll()
                } else setTime(time + 1)
            }
        }, 1000)

        return () => clearInterval(intervalId)
    })

    function handlePause() {
        setPause(!pause)
    }

    function handleSeven() {
        setRobber(Math.floor(Math.random() * players + 1))
    }

    function handleRoll() {
        if (value != 0) {
            const nextHistory = [...history.slice(1, 6), value]
            setHistory(nextHistory)
        }
        const dice =
            Math.floor(Math.random() * 6 + 1) +
            Math.floor(Math.random() * 6 + 1)
        setValue(dice)
    }

    const historyReversed = history.toReversed()
    const rolls = historyReversed.map((history, roll) => {
        return (
            <>
                <li key={roll}>{history}</li>
            </>
        )
    })

    return (
        <div className="mainPage">
            <div className="section">
                <h1>rolls</h1>
                <div className="die">
                    <img
                        src="https://i.imgur.com/sxNPtmG.png"
                        width="200px"
                        height="200px"
                    />
                </div>
                <p>Most Recent: {value}</p>
                <br></br>
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
            </div>
        </div>
    )
}

// TODO
// ID issue
// include timestamp at rolls?
// robber history
