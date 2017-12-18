import { pow } from './internal/math'
import { custom } from './custom';

export function expo(f: number) {
    return custom(n => n === 0 ? 0 : pow(f, 10 * (n - 1)))
}
