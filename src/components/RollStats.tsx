import StatDisplay from '@/components/StatDisplay'

type RollStatsProps = {
    value: number
    allRolls: number[]
}

export default function RollStats({ value, allRolls }: RollStatsProps) {
    return (
        <div className="section">
            <h1>rolls</h1>
            <p>Most Recent: {value}</p>
            <br />
            <StatDisplay
                data={allRolls}
                statKeys={['count', 'mostOccurring', 'leastOccurring']}
            />
        </div>
    )
}
