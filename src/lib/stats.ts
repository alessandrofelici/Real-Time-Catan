export type Stat = {
    label: string
    compute: (data: number[]) => string
}

function getFrequency(data: number[]): Record<number, number> {
    const freq: Record<number, number> = {}
    for (const d of data) freq[d] = (freq[d] || 0) + 1
    return freq
}

export function count(label: string): Stat {
    return {
        label,
        compute: (data) => data.length.toString(),
    }
}

export const statRegistry = {
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
    mostOccurringCount: {
        label: 'Most Occurring Count',
        compute: (data) => {
            if (data.length === 0) return '-'
            const freq = getFrequency(data)
            return Math.max(...Object.values(freq)).toString()
        },
    },
} satisfies Record<string, Stat>

export function recent(count: number, label: string, format?: (value: number) => string): Stat {
    return {
        label,
        compute: (data) => {
            if (data.length === 0) return '-'
            const items = data.slice(-count).toReversed()
            return format ? items.map(format).join(', ') : items.join(', ')
        },
    }
}

export type StatKey = keyof typeof statRegistry

export type StatEntry = StatKey | Stat

export function getStats(keys: StatEntry[]): Stat[] {
    return keys.map((key) => typeof key === 'string' ? statRegistry[key] : key)
}
