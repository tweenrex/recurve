const math = Math;
export const min = math.min;
export const max = math.max;
export const cos = math.cos;
export const sin = math.sin;
export const sqrt = math.sqrt;
export const pow = math.pow;

export const clamp = function(n:number) {
    return max(0.0, min(1.0, n));
}
