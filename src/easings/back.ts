const F = 1.70158

function easeIn(n, f?: number) {
    f = f || F
    return n * n * (n * f + n - f)
}

function easeOut(n, f?: number) {
    f = f || F
    return (n -= 1) * n * (n * f + n + f) + 1
}

function easeInOut(n, f?: number) {
    f = f || F
    n *= 2
    return n < 1 ? 0.5 * n * n * (n * f + n - f) : 0.5 * (n -= 2) * n * (n * f + n + f) + 1
}

export const back = {
    in: easeIn,
    out: easeOut,
    inOut: easeInOut
}
