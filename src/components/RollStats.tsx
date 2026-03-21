import StatDisplay from '@/components/StatDisplay'
import DiceFaces from '@/components/DiceFaces'
import { count, recent } from '@/lib/stats'

type RollStatsProps = {
    value: number
    dice: [number, number]
    allRolls: number[]
}

export default function RollStats({ value, dice, allRolls }: RollStatsProps) {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-3">
                <span className="w-1.5 h-8 bg-primary rounded-full"></span>
                <h2 className="text-3xl font-black tracking-tighter uppercase font-headline text-on-surface">ROLLS</h2>
            </div>
            <DiceFaces dice={dice} />
            <div className="space-y-4">
                <div className="space-y-1">
                    <p className="text-sm font-extrabold uppercase tracking-widest text-primary font-body">
                        Most Recent
                    </p>
                    <h3 className="text-7xl font-black text-on-surface leading-none font-headline">
                        {value}
                    </h3>
                </div>
                <StatDisplay
                    data={allRolls}
                    statKeys={[count('Round'), 'mostOccurring', 'leastOccurring', recent(3, 'Last Rolls')]}
                />
            </div>
        </div>
    )
}
