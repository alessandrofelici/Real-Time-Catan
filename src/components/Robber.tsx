import StatDisplay from '@/components/StatDisplay'
import { count, recent } from '@/lib/stats'

type RobberProps = {
    robber: number
    allRobbers: number[]
}

export default function Robber({ robber, allRobbers }: RobberProps) {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-3">
                <span className="w-1.5 h-8 bg-secondary-fixed rounded-full"></span>
                <h2 className="text-3xl font-black tracking-tighter uppercase font-headline text-on-surface">ROBBER</h2>
            </div>
            <div className="space-y-4">
                <div className="space-y-1">
                    <p className="text-sm font-extrabold uppercase tracking-widest text-secondary font-body">
                        Current Target
                    </p>
                    <p className="text-2xl font-bold text-on-surface-variant font-body">
                        Player {robber}
                    </p>
                </div>
                <StatDisplay
                    data={allRobbers}
                    statKeys={[count('Times Rolled'), 'mostOccurring', 'mostOccurringCount', recent(1, 'Last Robber', (v) => `Player ${v}`)]}
                />
            </div>
        </div>
    )
}
