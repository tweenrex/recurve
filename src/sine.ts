import { pi } from './internal/constants'
import { cos } from './internal/math'
import { recurve } from './recurve';

export const sine = recurve(n => -cos(n * pi / 2) + 1)
