export type Stat = {
    label: string
    compute: (data: number[]) => string
}

function getFrequency(data: number[]): Record<number, number> {
    const freq: Record<number, number> = {}
    for (const d of data) freq[d] = (freq[d] || 0) + 1
    return freq
}

export const statRegistry = {
    count: {
        label: 'Count',
        compute: (data) => data.length.toString(),
    },
    mostOccurring: {
        label: 'Most Occurring',
        compute: (data) => {
            if (data.length === 0) return '-'
            const freq = getFrequency(data)
            const max = Math.max(...Object.values(freq))
            return Object.entries(freq)
                .filter(([, v]) => v === max)
                .map(([k]) => k)
                .join(', ')
        },
    },
    leastOccurring: {
        label: 'Least Occurring',
        compute: (data) => {
            if (data.length === 0) return '-'
            const freq = getFrequency(data)
            const min = Math.min(...Object.values(freq))
            return Object.entries(freq)
                .filter(([, v]) => v === min)
                .map(([k]) => k)
                .join(', ')
        },
    },
} satisfies Record<string, Stat>

export function recent(count: number): Stat {
    return {
        label: `Last ${count}`,
        compute: (data) => {
            if (data.length === 0) return '-'
            return data.slice(-count).toReversed().join(', ')
        },
    }
}

export type StatKey = keyof typeof statRegistry

export type StatEntry = StatKey | Stat

export function getStats(keys: StatEntry[]): Stat[] {
    return keys.map((key) => typeof key === 'string' ? statRegistry[key] : key)
}
