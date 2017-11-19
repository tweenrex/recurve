const easeIn = function(n) {
    return n ** 3;
};

const easeOut = function(n) {
    return 1 + (n - 1) ** 3;
};

const easeInOut = function(n) {
    n *= 2;
    return (n < 1)
        ? 0.5 * (n ** 3)
        : 1 + (0.5 * (n - 2) ** 3);
};

export const power3 = {
    'in': easeIn,
    'out': easeOut,
    'inOut': easeInOut,
};
