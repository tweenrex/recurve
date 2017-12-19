/**
 * TODO: we may want to unroll this for performance reasons
 */

import { sqrt, pow } from './internal/math'
import { recurve } from './recurve'

export const circ = recurve(n => -1 * (sqrt(1 - pow(n, 2)) - 1))
