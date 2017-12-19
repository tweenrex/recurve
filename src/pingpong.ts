export function pingpong(n: number) {
    const floor = ~~n
    return floor % 2 ? 1.0 - n + floor : n - floor
}
