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

export type StatKey = keyof typeof statRegistry

export function getStats(keys: StatKey[]): Stat[] {
    return keys.map((key) => statRegistry[key])
}
