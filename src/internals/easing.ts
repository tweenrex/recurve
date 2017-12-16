export function easing(easeIn: (n: number) => number) {
    // @see https://joshondesign.com/2013/03/01/improvedEasingEquations
    return {
        in: easeIn,
        out: (n: number) => 1 - easeIn(1 - n),
        inOut: (n: number) => n < 0.5 ? easeIn(n * 2.0) / 2.0 : 1 - easeIn((1 - n) * 2) / 2
    }
}
