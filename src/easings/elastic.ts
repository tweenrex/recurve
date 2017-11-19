import { tau } from '../internals/constants';
import { sin, pow } from '../internals/math';

// TODO: allow customization of elastic rebound amount/speed

const easeIn = function(n) {
    if (n === 0.0 || n === 1.0) return n;
    return -1 * pow(2,10*(n-1)) * sin( (n-1.075)*tau/0.3 );
};

const easeOut = function(n) {
    if (n === 0.0 || n === 1.0) return n;
    return 1 + pow(2,-10*n) * sin( (n-0.075)*tau/0.3 );
};

const easeInOut = function(n) {
    if (n === 0.0 || n === 1.0) return n;
    n*=2;
    return (n < 1)
        ? -0.5 * pow(2,10*(n-1)) * sin( (n-1.075)*tau/0.3 )
        : 1 + 0.5 * pow(2,-10*(n-1)) * sin( (n-1.075)*tau/0.3 );
};

export const elastic = {
    'in': easeIn,
    'out': easeOut,
    'inOut': easeInOut,
};
