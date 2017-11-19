const easeIn = function(n, f:number = 1.70158) {
    return n * n * (n * f + n - f);
};

const easeOut = function(n, f:number = 1.70158) {
    return (n-=1) * n * (n * f + n + f) + 1;
};

const easeInOut = function(n, f:number = 1.70158) {
    n *= 2;
    return (n < 1)
        ? 0.5 * n * n * (n * f + n - f)
        : 0.5 * (n-=2) * n * (n * f + n + f) + 1;
};

export const back = {
    'in': easeIn,
    'out': easeOut,
    'inOut': easeInOut,
};
