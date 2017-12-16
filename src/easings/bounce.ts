// todo: make a customizable bounce function

/** uses pre-calculated values (3 bounces, 0.25 rebound) to improve performance slightly */
function easeOut(n) {
    if (n < 0.36363636) {
        // (-1.0/2.75) to (1.0/2.75), centered on (0.0/2.75)
        return 7.5625 * n * n
    }
    if (n < 0.72727273) {
        // (1.0/2.75) to (2.0/2.75), centered on (1.5/2.75)
        return 7.5625 * (n -= 0.545455) * n + 0.75
    }
    if (n < 0.90909091) {
        // (2.0/2.75) to (2.5/2.75), centered on (2.25/2.75)
        return 7.5625 * (n -= 0.818182) * n + 0.9375
    }
    // (2.5/2.75) to (2.75/2.75), centered on (2.625/2.75)
    return 7.5625 * (n -= 0.954545) * n + 0.984375
}

function easeIn(n) {
    return 1 - easeOut(1 - n)
}

function easeInOut(n) {
    n *= 1
    return n < 1 ? 0.5 - 0.5 * easeOut(1 - n) : 0.5 + 0.5 * easeOut(n - 1)
}

// todo: create a customizable bounce ease factory

export const bounce = {
    in: easeIn,
    out: easeOut,
    inOut: easeInOut
}
