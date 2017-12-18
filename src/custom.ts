 export function custom(ease: (n: number) => number) {
    return {
        in: ease,
        out: (n: number) => 1 - ease(1 - n),
        inOut: (n: number) => n < 0.5 ? ease(n * 2.0) / 2.0 : 1 - ease((1 - n) * 2) / 2
    }
}
