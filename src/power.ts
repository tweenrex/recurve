import { pow } from './internal/math'
import { recurve } from './recurve'

export function power(c: number) {
    return recurve(n => pow(n, c))
}
