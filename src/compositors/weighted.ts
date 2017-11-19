// accepts an ordered list of functions and corresponding weights
// returns a composite function that calls each of the provided functions over the range 0..1 in proportion to their weights
// each function will be passed a value from 0..1
// if weights are not provided, a weight of 1 will be assigned for each function
export const weighted = function(funcs, weights = []) {
    const l = funcs.length;

    // total the weights
    let sum = 0;
    for (let i=0; i<l; i++) {
        sum += i < weights.length ? weights[i] : 1;
    }
    const total = sum;

    // calc offsets (range 0..1)
    const offsets = [];
    sum = 0;
    for (let i=0; i<l; i++) {
        sum += weights[i];
        offsets.push(sum/total);
    }

    // weighted composite function
    return (n:number) => {
        for (let i=0; i<l; i++) {
            if (n <= offsets[i]) {
                const prevOffset = i>0 ? offsets[i-1] : 0;
                return funcs[i]( (n-prevOffset) / (offsets[i]-prevOffset) );
            }
        }
        return 1.0; // just in case
    }
};
