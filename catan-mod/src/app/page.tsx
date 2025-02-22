'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
    const [time, setTime] = useState(0)
    const [pause, setPause] = useState(false)
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
            <div className="header"></div>
            <div className="page">
                <button className="timer" onClick={handlePause}>
                    <h1>clock</h1>
                    <p>{pause ? '❚❚' : time}</p>
                </button>
            </div>
        </body>
    )
}
