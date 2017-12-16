// accepts an ordered list of functions and corresponding weights
// returns a composite function that calls each of the provided functions over the range 0..1 in proportion to their weights
// each function will be passed a value from 0..1
// if weights are not provided, a weight of 1 will be assigned for each function
export const weighted = function(funcs, weights = []) {
    const l = funcs.length

    // total the weights
    let total = 0
    for (let i = 0; i < l; i++) {
        total += i < weights.length ? weights[i] : 1
    }

    // calc offsets (range 0..1)
    const offsets = Array(l)
    let sum = 0
    for (let i = 0; i < l; i++) {
        sum += weights[i]
        offsets[i] = sum / total
    }

    // weighted composite function
    return (n: number) => {
        for (let i = 0; i < l; i++) {
            if (n <= offsets[i]) {
                const prevOffset = i > 0 ? offsets[i - 1] : 0
                return funcs[i]((n - prevOffset) / (offsets[i] - prevOffset))
            }
        }
        // just in case
        return 1.0
    }
}
