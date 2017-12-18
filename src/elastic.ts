import { tau } from './internal/constants'
import { sin, pow } from './internal/math'
import { custom } from './custom'


const amplitude = 1.1
const d1 = 2.5

function elasticIn(n: number) {
    if (!n || n === 1) {
        return n
    }
    return -1 * pow(2, 10 * (n - 1)) * sin((n - amplitude) * tau * d1)
}

export const elastic = custom(elasticIn)
