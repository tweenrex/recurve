import { ceil, floor } from './internal/math'

export function steps(count: number, mode?: 'end' | 'start') {
    const fn = mode === 'end' ? floor : ceil
    return (x: number) => {
        const n = fn(x * count) / count
        return n < 0 ? 0 : n > 1 ? 1 : n
    }
}
