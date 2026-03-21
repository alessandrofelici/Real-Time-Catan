import StatDisplay from '@/components/StatDisplay'
import { count, recent } from '@/lib/stats'

type RobberProps = {
    robber: number
    allRobbers: number[]
}

export default function Robber({ robber, allRobbers }: RobberProps) {
    return (
        <div className="section">
            <h1>robber</h1>
            <p>Player {robber}</p>
            <br />
            <StatDisplay
                data={allRobbers}
                statKeys={[count('Times Rolled'), 'mostOccurring', 'mostOccurringCount', recent(1, 'Last Robber', (v) => `Player ${v}`)]}
            />
        </div>
    )
}
