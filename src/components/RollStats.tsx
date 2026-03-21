import StatDisplay from '@/components/StatDisplay'
import DiceFaces from '@/components/DiceFaces'
import { recent } from '@/lib/stats'

type RollStatsProps = {
    value: number
    dice: [number, number]
    allRolls: number[]
}

export default function RollStats({ value, dice, allRolls }: RollStatsProps) {
    return (
        <div className="section">
            <h1>rolls</h1>
            <DiceFaces dice={dice} />
            <p>Most Recent: {value}</p>
            <br />
            <StatDisplay
                data={allRolls}
                statKeys={['count', 'mostOccurring', 'leastOccurring', recent(3)]}
            />
        </div>
    )
}
