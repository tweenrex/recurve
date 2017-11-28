// accepts an ordered list of functions and corresponding offsets (0..1)
// returns a composite function that calls each of the provided functions over the range 0..1 such that each starts at the corresponding offset
// each function will be passed a value from 0..1
// if offsets are not provided, offsets will be evenly distributed for all remaining functions
export const piecewise = function(funcs, offsets =[]) {
    const l = funcs.length;

    // pad offsets array
    for (let i=offsets.length; i<l; i++) {
        let prevOffset = i>0 ? offsets[i-1] : 0.0;
        offsets.push(0.5 * (prevOffset + 1.0));
    }

    return (n:number) => {
        for (let i=0; i<l-1; i++) {
            if (n <= offsets[i+1]) {
                const p = offsets[i];
                return funcs[i]((n-p)/(offsets[i+1]-p));
            }
        }
        const p = l>1 ? offsets[l-1] : 0.0;
        return funcs[l-1]((n-p)/(1-p));
    };
};
