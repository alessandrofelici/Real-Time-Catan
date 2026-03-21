import { getStats, StatEntry } from '@/lib/stats'

type StatDisplayProps = {
    data: number[]
    statKeys: StatEntry[]
}

export default function StatDisplay({ data, statKeys }: StatDisplayProps) {
    const stats = getStats(statKeys)

    return (
        <div className="text-lg font-bold space-y-3 pt-4 border-t-2 border-outline-variant/20">
            {stats.map((stat) => {
                const value = stat.compute(data)
                const isMultiValue = value.includes(',') || value.length > 4

                if (isMultiValue) {
                    return (
                        <div key={stat.label} className="flex flex-col gap-1 pt-2">
                            <span className="text-on-surface-variant uppercase tracking-tight text-sm font-extrabold">
                                {stat.label}
                            </span>
                            <span className="text-on-surface text-2xl font-black font-headline">
                                {value}
                            </span>
                        </div>
                    )
                }

                return (
                    <div key={stat.label} className="flex justify-between items-center">
                        <span className="text-on-surface-variant uppercase tracking-tight">
                            {stat.label}
                        </span>
                        <span className="text-on-surface">{value}</span>
                    </div>
                )
            })}
        </div>
    )
}
