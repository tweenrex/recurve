const easeIn = function(n) {
    return n ** 2;
};

const easeOut = function(n) {
    return 1 + (n - 1) ** 2;
};

const easeInOut = function(n) {
    n *= 2;
    return (n < 1)
        ? 0.5 * (n ** 2)
        : 1 + (0.5 * (n - 2) ** 2);
};

export const power2 = {
    'in': easeIn,
    'out': easeOut,
    'inOut': easeInOut,
};
