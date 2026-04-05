'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { defaultGameOptions } from '@/lib/gameOptions'
import OptionSwitch from '@/components/OptionSwitch'
import AboutModal from '@/components/AboutModal'

export default function Options() {
    const router = useRouter()
    const [timer, setTimer] = useState('')
    const [count, setCount] = useState('')
    const [sound, setSound] = useState(defaultGameOptions.sound)
    const [speedupStart, setSpeedupStart] = useState(defaultGameOptions.speedupStart)
    const [robberAnimation, setRobberAnimation] = useState(defaultGameOptions.robberAnimation)
    const [showAbout, setShowAbout] = useState(false)

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

        const params = new URLSearchParams({
            timer_num: timerNum.toString(),
            count_num: countNum.toString(),
            sound: sound.toString(),
            speedup_start: speedupStart.toString(),
            robber_animation: robberAnimation.toString(),
        })

        router.push(`/game?${params.toString()}`)
    }

    return (
        <div className="inputPage">
            {showAbout && <AboutModal onClose={() => setShowAbout(false)} />}
            <div className="formBox">
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
                    <h1
                        style={{
                            fontFamily: 'var(--font-headline), sans-serif',
                            fontSize: 32,
                            fontWeight: 900,
                            textTransform: 'uppercase',
                            letterSpacing: '-0.03em',
                            color: '#ac2c00',
                            margin: 0,
                        }}
                    >
                        Real Time Catan
                    </h1>
                    <button
                        onClick={() => setShowAbout(true)}
                        title="How to play"
                        style={{
                            width: 28,
                            height: 28,
                            borderRadius: '50%',
                            border: '2px solid #ac2c00',
                            background: 'transparent',
                            color: '#ac2c00',
                            fontFamily: 'var(--font-headline), sans-serif',
                            fontWeight: 900,
                            fontSize: 14,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: 4,
                        }}
                    >
                        ?
                    </button>
                </div>
                <p>Roll Timer</p>
                <input
                    className="textArea"
                    type="number"
                    min={1}
                    max={120}
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
                <OptionSwitch label="Sound" checked={sound} onChange={setSound} />
                <OptionSwitch label="Speedup Start" checked={speedupStart} onChange={setSpeedupStart} />
                <OptionSwitch label="Show Robber Animation" checked={robberAnimation} onChange={setRobberAnimation} />
                <br />
                <button
                    onClick={handleStart}
                    style={{
                        width: '100%',
                        maxWidth: 400,
                        padding: '12px 0',
                        backgroundColor: '#ac2c00',
                        color: 'white',
                        border: 'none',
                        borderRadius: 10,
                        fontSize: 18,
                        fontWeight: 800,
                        fontFamily: 'var(--font-headline), sans-serif',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        cursor: 'pointer',
                    }}
                >
                    Start
                </button>
            </div>
        </div>
    )
}
