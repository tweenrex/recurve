import { pow } from '../internals/math';

const easeIn = function(n, f: number = 2) {
    return n == 0.0
        ? 0.0
        : pow(f, 10 * (n - 1));
};

const easeOut = function(n, f: number = 2) {
    return n == 1.0
        ? 1.0
        : -pow(f, -10 * n) + 1;
};

const easeInOut = function(n, f: number = 2) {
    n *= 2;
    if (n < 1) {
        return n == 0.0
            ? 0.0
            : 0.5 * pow(f, 10 * (n - 1));
    } else {
        return n == 2.0
            ? 1.0
            : -0.5 * pow(f, -10 * (n - 1)) + 1;
    }
};

export const expo = {
    'in': easeIn,
    'out': easeOut,
    'inOut': easeInOut,
};
