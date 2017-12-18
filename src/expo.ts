import { pow } from './internal/math'
import { recurve } from './recurve';
import { IEasingInOut, IExpoEasing } from './types';


const expo = ((f: number) => {
    return recurve(n => n === 0 ? 0 : pow(f, 10 * (n - 1)))
}) as IEasingInOut & IExpoEasing

const defaultEasing = expo(2)
expo.in = defaultEasing.in
expo.out = defaultEasing.out
expo.inOut = defaultEasing.inOut

export { expo }
