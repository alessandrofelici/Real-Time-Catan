'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import MenuButton from '@/components/MenuButton'
import RollStats from '@/components/RollStats'
import Clock from '@/components/Clock'
import Robber from '@/components/Robber'

type GameClientProps = {
    maxTime: number
    players: number
}

export default function GameClient({ maxTime, players }: GameClientProps) {
    const [time, setTime] = useState(0)
    const [pause, setPause] = useState(false)
    const [robber, setRobber] = useState(0)
    const [value, setValue] = useState(0)
    const [allRolls, setAllRolls] = useState<number[]>([])
    const [allRobbers, setAllRobbers] = useState<number[]>([])
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        audioRef.current = new Audio('/sounds/roll.wav')
    }, [])

    const handleSeven = useCallback(() => {
        const newRobber = Math.floor(Math.random() * players) + 1
        setRobber(newRobber)
        setAllRobbers((prev) => [...prev, newRobber])
    }, [players])

    const handleRoll = useCallback(() => {
        const dice =
            Math.floor(Math.random() * 6) + 1 +
            Math.floor(Math.random() * 6) + 1
        setValue(dice)
        setAllRolls((prev) => [...prev, dice])
        if (audioRef.current) {
            audioRef.current.currentTime = 0
            audioRef.current.play()
        }
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!pause) {
                if (time === maxTime) {
                    setTime(0)
                    handleRoll()
                } else {
                    setTime(time + 1)
                }
            }
        }, 1000)

        return () => clearInterval(intervalId)
    }, [pause, time, maxTime, handleRoll])

    useEffect(() => {
        if (value === 7) handleSeven()
    }, [value, handleSeven])

    function handlePause() {
        setPause(!pause)
    }

    return (
        <div>
            <MenuButton />
            <div className="mainPage">
                <RollStats value={value} allRolls={allRolls} />
                <Clock time={time} pause={pause} onPause={handlePause} />
                <Robber robber={robber} allRobbers={allRobbers} />
            </div>
        </div>
    )
}
