const SPEEDUP_ROUNDS = 3
const BASE_FRACTION = 1 / 2

/**
 * Returns the effective timer duration (in seconds) for a given round.
 * For the first SPEEDUP_ROUNDS rounds, scales quadratically from a base
 * time (maxTime / 6) up toward maxTime. Round 4+ returns maxTime.
 *
 * Formula: base + (maxTime - base) * ((round - 1) / SPEEDUP_ROUNDS)^2
 *
 * Example with maxTime = 30 (base = 5):
 *   Round 1: 5.0
 *   Round 2: 7.8
 *   Round 3: 16.1
 *   Round 4+: 30.0
 */
export function getSpeedupTime(round: number, maxTime: number): number {
    if (round > SPEEDUP_ROUNDS) return maxTime

    const base = maxTime * BASE_FRACTION
    const progress = (round - 1) / SPEEDUP_ROUNDS
    const result = base + (maxTime - base) * progress * progress
    return Math.round(result * 10) / 10
}
