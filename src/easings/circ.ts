import { sqrt } from '../internals/math'

function easeIn(n) {
    return -1 * (sqrt(1 - n ** 2) - 1)
}

function easeOut(n) {
    return sqrt(1 - (n - 1) ** 2)
}

function easeInOut(n) {
    n *= 2
    return n < 1 ? -0.5 * (sqrt(1 - n ** 2) - 1) : 0.5 * (sqrt(1 - (n - 2) ** 2) + 1)
}

export const circ = {
    in: easeIn,
    out: easeOut,
    inOut: easeInOut
}
