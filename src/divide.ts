import { IEasing } from './types'
import { repeat } from './repeat'
import { pingpong } from './pingpong'
import { linear } from './linear'

/**
 * Divides a 0-1 a certain number of times.  If pingpong is true, alternating sections
 * will occur in the reverse direction (like a ball on a pingpong table).  If easing is set,
 * the easing will be applied to each division
 */
export function divide(options: { times: number; pingpong?: boolean; easing?: IEasing }) {
    const cycle = options.pingpong ? pingpong : repeat
    const ease = options.easing || linear
    return (n: number) => ease(cycle(n * options.times))
}
