import GameClient from '@/components/GameClient'

type GamePageProps = {
    searchParams: Promise<{ timer_num?: string; count_num?: string }>
}

export default async function GamePage({ searchParams }: GamePageProps) {
    const params = await searchParams
    const maxTime = Number(params.timer_num)
    const players = Number(params.count_num)

    return <GameClient maxTime={maxTime} players={players} />
}
