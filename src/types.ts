export interface IEasing {
    (n: number): number
}

export interface IEasingInOut {
    in: IEasing
    out: IEasing
    inOut: IEasing
}

export interface IBackEasing {
    (f: number): IEasingInOut
}

export interface IBounceEasing {
    (n1: number): IEasingInOut
}

export interface IElasticEasing {
    (amplitude: number, period: number, bounces: number): IEasingInOut
}
export interface IExpoEasing {
    (f: number): IEasingInOut
}
