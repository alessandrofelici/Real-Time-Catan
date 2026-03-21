import StatDisplay from '@/components/StatDisplay'

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
                statKeys={['count', 'mostOccurring']}
            />
        </div>
    )
}
