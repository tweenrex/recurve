import { pow } from '../internals/math'

function easeIn(n, f: number = 2) {
    return n === 0.0 ? 0.0 : pow(f, 10 * (n - 1))
}

function easeOut(n, f: number = 2) {
    return n === 1.0 ? 1.0 : -pow(f, -10 * n) + 1
}

function easeInOut(n, f: number = 2) {
    n *= 2
    if (n < 1) {
        return n === 0.0 ? 0.0 : 0.5 * pow(f, 10 * (n - 1))
    }
    return n === 2.0 ? 1.0 : -0.5 * pow(f, -10 * (n - 1)) + 1
}

export const expo = {
    in: easeIn,
    out: easeOut,
    inOut: easeInOut
}
