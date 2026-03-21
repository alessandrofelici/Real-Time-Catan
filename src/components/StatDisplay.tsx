import { getStats, StatKey } from '@/lib/stats'

type StatDisplayProps = {
    data: number[]
    statKeys: StatKey[]
}

export default function StatDisplay({ data, statKeys }: StatDisplayProps) {
    const stats = getStats(statKeys)

    return (
        <>
            {stats.map((stat) => (
                <p key={stat.label} style={{ fontSize: 18 }}>
                    {stat.label}: {stat.compute(data)}
                </p>
            ))}
        </>
    )
}
