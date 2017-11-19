const easeIn = function(n) {
    return n ** 5;
};

const easeOut = function(n) {
    return 1 + (n - 1) ** 5;
};

const easeInOut = function(n) {
    n *= 2;
    return (n < 1)
        ? 0.5 * (n ** 5)
        : 1 + (0.5 * (n - 2) ** 5);
};

export const power5 = {
    'in': easeIn,
    'out': easeOut,
    'inOut': easeInOut,
};
