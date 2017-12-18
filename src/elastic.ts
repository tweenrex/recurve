import { tau } from './internal/constants'
import { sin, pow } from './internal/math'
import { recurve } from './recurve'
import { IEasingInOut, IElasticEasing } from './types'

const elastic = ((amplitude: number, period: number, bounces: number) => {
    const s = period / 4

    return recurve(n => {
        if (n === 0 || n === 1) {
            return n
        }
        return -amplitude * pow(2, 10 * (n - 1)) * sin((n - 1 - s) * tau / period)
    })
}) as IEasingInOut & IElasticEasing

const defaultEasing = elastic(1, 0.4, 4)
elastic.in = defaultEasing.in
elastic.out = defaultEasing.out
elastic.inOut = defaultEasing.inOut
export { elastic }
