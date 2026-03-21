'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import MenuButton from '@/components/MenuButton'
import RollStats from '@/components/RollStats'
import Clock from '@/components/Clock'
import Robber from '@/components/Robber'
import RobberModal from '@/components/RobberModal'

import { GameOptions } from '@/lib/gameOptions'
import { getSpeedupTime } from '@/lib/speedup'

type GameClientProps = {
    maxTime: number
    players: number
    options: GameOptions
}

export default function GameClient({ maxTime, players, options }: GameClientProps) {
    const [time, setTime] = useState(0)
    const [pause, setPause] = useState(true)
    const [robber, setRobber] = useState(0)
    const [value, setValue] = useState(0)
    const [dice, setDice] = useState<[number, number]>([0, 0])
    const [round, setRound] = useState(0)
    const [allRolls, setAllRolls] = useState<number[]>([])
    const [allRobbers, setAllRobbers] = useState<number[]>([])
    const [showRobberModal, setShowRobberModal] = useState(false)
    const [pendingRobber, setPendingRobber] = useState(0)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        audioRef.current = new Audio('/sounds/roll.wav')
    }, [])

    const handleSeven = useCallback(() => {
        const newRobber = Math.floor(Math.random() * players) + 1
        if (options.robberAnimation) {
            setPendingRobber(newRobber)
            setShowRobberModal(true)
            setPause(true)
        } else {
            setRobber(newRobber)
            setAllRobbers((prev) => [...prev, newRobber])
        }
    }, [players, options.robberAnimation])

    function handleRobberModalComplete() {
        setRobber(pendingRobber)
        setAllRobbers((prev) => [...prev, pendingRobber])
        setShowRobberModal(false)
        setPause(false)
    }

    const handleRoll = useCallback(() => {
        const die1 = Math.floor(Math.random() * 6) + 1
        const die2 = Math.floor(Math.random() * 6) + 1
        setDice([die1, die2])
        setValue(die1 + die2)
        setAllRolls((prev) => [...prev, die1 + die2])
        setRound((prev) => prev + 1)
        if (options.sound && audioRef.current) {
            audioRef.current.currentTime = 0
            audioRef.current.play().catch(() => {})
        }
    }, [options.sound])

    const currentMaxTime = options.speedupStart
        ? getSpeedupTime(round + 1, maxTime)
        : maxTime

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!pause) {
                const maxTenths = currentMaxTime * 10
                if (time >= maxTenths) {
                    setTime(0)
                    handleRoll()
                } else {
                    setTime(time + 1)
                }
            }
        }, 100)

        return () => clearInterval(intervalId)
    }, [pause, time, currentMaxTime, handleRoll])

    useEffect(() => {
        if (value === 7) handleSeven()
    }, [value, handleSeven])

    function handlePause() {
        setPause(!pause)
    }

    return (
        <div>
            <MenuButton />
            {showRobberModal && (
                <RobberModal
                    players={players}
                    selected={pendingRobber}
                    onComplete={handleRobberModalComplete}
                />
            )}
            <div className="mainPage">
                <RollStats value={value} dice={dice} allRolls={allRolls} />
                <Clock time={time} maxTenths={currentMaxTime * 10} pause={pause} onPause={handlePause} />
                <Robber robber={robber} allRobbers={allRobbers} />
            </div>
        </div>
    )
}
