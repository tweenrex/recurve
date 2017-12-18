import { sqrt, pow } from './internal/math'
import { custom } from './custom';

export const circ = custom(n => -1 * (sqrt(1 - pow(n, 2)) - 1))
