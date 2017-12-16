import { pi } from '../internals/constants'
import { cos, sin } from '../internals/math'

function easeIn(n) {
    return -cos(n * pi / 2) + 1
}

function easeOut(n) {
    return sin(n * pi / 2)
}

function easeInOut(n) {
    return (-cos(n * pi) + 1) / 2
}

export const sine = {
    in: easeIn,
    out: easeOut,
    inOut: easeInOut
}
