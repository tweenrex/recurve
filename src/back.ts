import { recurve } from './recurve'
import { IEasingInOut, IBackEasing } from './types'

const back = ((f: number) => {
    return recurve(n => n * n * ((f + 1) * n - f))
}) as IEasingInOut & IBackEasing

const defaultEasing = back(1.70158)
back.in = defaultEasing.in
back.out = defaultEasing.out
back.inOut = defaultEasing.inOut

export { back }
