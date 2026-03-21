import GameClient from '@/components/GameClient'
import { defaultGameOptions } from '@/lib/gameOptions'

type GamePageProps = {
    searchParams: Promise<{
        timer_num?: string
        count_num?: string
        sound?: string
        speedup_start?: string
    }>
}

export default async function GamePage({ searchParams }: GamePageProps) {
    const params = await searchParams
    const maxTime = Number(params.timer_num)
    const players = Number(params.count_num)
    const options = {
        sound: params.sound === undefined ? defaultGameOptions.sound : params.sound === 'true',
        speedupStart: params.speedup_start === undefined ? defaultGameOptions.speedupStart : params.speedup_start === 'true',
    }

    return <GameClient maxTime={maxTime} players={players} options={options} />
}
