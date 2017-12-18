import { custom } from './custom'
import { mirror } from './mirror'
import { IEasingInOut, IBounceEasing } from './types'

// todo: make a customizable bounce function
// const D1 = 2.75

/**
 * Creates a bounce easing.
 */
const bounce = ((n1: number) => {
    return custom(
        mirror(n => {
            if (n < 0.36363636) {
                // (-1.0/2.75) to (1.0/2.75), centered on (0.0/2.75)
                return n1 * n * n
            }
            if (n < 0.72727273) {
                // (1.0/2.75) to (2.0/2.75), centered on (1.5/2.75)
                return n1 * (n -= 0.545455) * n + 0.75
            }
            if (n < 0.90909091) {
                // (2.0/2.75) to (2.5/2.75), centered on (2.25/2.75)
                return n1 * (n -= 0.818182) * n + 0.9375
            }
            // (2.5/2.75) to (2.75/2.75), centered on (2.625/2.75)
            return n1 * (n -= 0.954545) * n + 0.984375
        })
    )
}) as IEasingInOut & IBounceEasing

const defaultEasing = bounce(7.5625)
bounce.in = defaultEasing.in
bounce.out = defaultEasing.out
bounce.inOut = defaultEasing.inOut

export { bounce }
