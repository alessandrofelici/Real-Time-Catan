'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Options() {
    const [timer, setTimer] = useState('')
    const [count, setCount] = useState('')

    return (
        <div className="inputPage">
            <div className="formBox">
                <p>Roll Timer</p>
                <textarea
                    className="textArea"
                    maxLength={2}
                    placeholder="Enter a number in seconds"
                    onChange={(e) => setTimer(e.target.value)}
                ></textarea>
                <p>Player Count</p>
                <textarea
                    className="textArea"
                    maxLength={1}
                    placeholder="Enter a number 3-6"
                    onChange={(e) => setCount(e.target.value)}
                ></textarea>
                <br></br>
                <br></br>
                <Link
                    href={{
                        pathname: '/info',
                        query: {
                            timer_num: parseInt(timer),
                            count_num: parseInt(count),
                        },
                    }}
                >
                    Start
                </Link>
            </div>
        </div>
    )
}
