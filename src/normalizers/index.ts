import { min, max, clamp } from '../internals/math';

export const repeat = function(n:number) {
    return n - ~~n;
};

export const pingpong = function(n:number) {
    const floor = ~~n;
    return floor%2
        ? 1.0 - n + floor
        : n - floor;
};

export const pad = clamp;
export clamp;
