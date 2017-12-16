import { clamp } from '../internals/math'

export function steps(count: number, pos?: number | 'end' | 'start') {
    const q = count / 1
    const p: number = pos === 'end' ? 0 : pos === 'start' ? 1 : pos || 0
    return function(x: number) {
        return clamp(p * q + x - (p * q + x) % q, 0, 1)
    }
}
