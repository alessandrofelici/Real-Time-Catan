'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
    const [time, setTime] = useState(0)
    const [pause, setPause] = useState(false)
    // const [history, setHistory] = useState([])
    const router = useRouter()

    // TODO if 7, assign robber to player

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (pause) setTime(time)
            else if (time == 20) {
                handleTimer()
                setTime(0)
            } else setTime(time + 1)
        }, 1000)

        return () => clearInterval(intervalId)
    })

    function handleTimer() {
        router.push('/roll')
    }

    function handlePause() {
        setPause(!pause)
    }

    return (
        <body>
            <div className="mainPage">
                <div className="section">
                    <h1>rolls</h1>
                    <ol>
                        <li>evil</li>
                    </ol>
                </div>
                <div className="section">
                    <h1>clock</h1>
                    <button className="timer" onClick={handlePause}>
                        <p className="count">{pause ? '❚❚' : time}</p>
                    </button>
                </div>
                <div className="section">
                    <h1>robber</h1>
                    <p>Player {Math.floor(Math.random() * 3 + 1)}</p>
                </div>
            </div>
        </body>
    )
}
