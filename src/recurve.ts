/**
 * Generates an in, out, and inOut easing based on an in easing
 */
export function recurve(easing: (n: number) => number) {
    return {
        in: easing,
        out: (n: number) => 1 - easing(1 - n),
        inOut: (n: number) => n < 0.5 ? easing(n * 2.0) / 2.0 : 1 - easing((1 - n) * 2) / 2
    }
}
