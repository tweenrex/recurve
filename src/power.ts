import { pow } from './internal/math'
import { custom } from './custom'

export function power(c: number) {
    return custom(n => pow(n, c))
}
