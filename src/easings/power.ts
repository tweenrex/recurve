import { pow } from '../internals/math'
import { easing } from '../internals/easing';

export function power(c: number) {
    return easing(n => pow(n, c))
}

export const quad = power(2)
export const cubic = power(3)
export const quart = power(4)
export const quint = power(5)
