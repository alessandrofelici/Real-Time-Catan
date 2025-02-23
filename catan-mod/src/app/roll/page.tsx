'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Roll() {
    const [time, setTime] = useState(0)
    const [roll, setRoll] = useState(true)
    const [value, setValue] = useState(0)
    const router = useRouter()

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (time == 3) {
                setRoll(false)
                handleRoll()
            }
            if (time == 10) {
                router.push('/info')
            }
            setTime(time + 1)
        }, 1000)

        return () => clearInterval(intervalId)
    })

    function handleRoll() {
        const dice =
            Math.floor(Math.random() * 6 + 1) +
            Math.floor(Math.random() * 6 + 1)
        setValue(dice)
    }

    return (
        <body>
            <div className="rollPage">
                <div className="die">
                    <img
                        src="https://i.imgur.com/sxNPtmG.png"
                        width="200px"
                        height="200px"
                    />
                </div>
                <h1>{roll ? 'rolling...' : value}</h1>
            </div>
        </body>
    )
}
