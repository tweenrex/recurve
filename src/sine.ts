import { pi } from './internal/constants'
import { cos } from './internal/math'
import { custom } from './custom';

export const sine = custom(n => -cos(n * pi / 2) + 1)
