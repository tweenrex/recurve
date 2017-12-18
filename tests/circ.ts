import { circ } from '../src/circ'
import { assert } from 'chai'

test('circ.in(.000000) is about 0', () => {
    assert.approximately(circ.in(0.0), 0, 0.0001)
})
test('circ.in(.250000) is about .031754163448145745', () => {
    assert.approximately(circ.in(0.25), 0.031754163448145745, 0.0001)
})
test('circ.in(.333333) is about .057190958417936644', () => {
    assert.approximately(circ.in(0.333333), 0.057190958417936644, 0.0001)
})
test('circ.in(.500000) is about .1339745962155614', () => {
    assert.approximately(circ.in(0.5), 0.1339745962155614, 0.0001)
})
test('circ.in(.666667) is about .2546440075000701', () => {
    assert.approximately(circ.in(0.666667), 0.2546440075000701, 0.0001)
})
test('circ.in(.750000) is about .3385621722338523', () => {
    assert.approximately(circ.in(0.75), 0.3385621722338523, 0.0001)
})
test('circ.in(1.000000) is about 1', () => {
    assert.approximately(circ.in(1.0), 1, 0.0001)
})

test('circ.out(.000000) is about 0', () => {
    assert.approximately(circ.out(0.0), 0, 0.0001)
})
test('circ.out(.250000) is about .6614378277661477', () => {
    assert.approximately(circ.out(0.25), 0.6614378277661477, 0.0001)
})
test('circ.out(.333333) is about .7453559924999298', () => {
    assert.approximately(circ.out(0.333333), 0.7453559924999298, 0.0001)
})
test('circ.out(.500000) is about .8660254037844386', () => {
    assert.approximately(circ.out(0.5), 0.8660254037844386, 0.0001)
})
test('circ.out(.666667) is about .9428090415820634', () => {
    assert.approximately(circ.out(0.666667), 0.9428090415820634, 0.0001)
})
test('circ.out(.750000) is about .9682458365518543', () => {
    assert.approximately(circ.out(0.75), 0.9682458365518543, 0.0001)
})
test('circ.out(1.000000) is about 1', () => {
    assert.approximately(circ.out(1.0), 1, 0.0001)
})

test('circ.inOut(.000000) is about 0', () => {
    assert.approximately(circ.inOut(0.0), 0, 0.0001)
})
test('circ.inOut(.250000) is about .0669872981077807', () => {
    assert.approximately(circ.inOut(0.25), 0.0669872981077807, 0.0001)
})
test('circ.inOut(.333333) is about .12732200375003505', () => {
    assert.approximately(circ.inOut(0.333333), 0.12732200375003505, 0.0001)
})
test('circ.inOut(.500000) is about .5', () => {
    assert.approximately(circ.inOut(0.5), 0.5, 0.0001)
})
test('circ.inOut(.666667) is about .8726779962499649', () => {
    assert.approximately(circ.inOut(0.666667), 0.8726779962499649, 0.0001)
})
test('circ.inOut(.750000) is about .9330127018922193', () => {
    assert.approximately(circ.inOut(0.75), 0.9330127018922193, 0.0001)
})
test('circ.inOut(1.000000) is about 1', () => {
    assert.approximately(circ.inOut(1.0), 1, 0.0001)
})
