import { pi } from '../internals/constants';
import { cos, sin } from '../internals/math';

const easeIn = function(n) {
    return -cos(n * pi / 2) + 1;
};

const easeOut = function(n) {
    return sin(n * pi / 2);
};

const easeInOut = function(n) {
    return (-cos(n * pi) + 1) / 2;
};

export const sine = {
    'in': easeIn,
    'out': easeOut,
    'inOut': easeInOut,
};
