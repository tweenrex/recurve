const easeIn = function(n) {
    return n ** 4;
};

const easeOut = function(n) {
    return 1 + (n - 1) ** 4;
};

const easeInOut = function(n) {
    n *= 2;
    return (n < 1)
        ? 0.5 * (n ** 4)
        : 1 + (0.5 * (n - 2) ** 4);
};

export const power4 = {
    'in': easeIn,
    'out': easeOut,
    'inOut': easeInOut,
};
