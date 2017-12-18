import { IEasing } from './types'
/**
 * Turns an in -> out or out -> in
 * @param ease easing function to rotate 180 degrees
 */
export function mirror(ease: IEasing) {
    return (n: number) => 1 - ease(1 - n)
}
