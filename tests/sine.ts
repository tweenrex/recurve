import { sine } from '../src/sine'
import { assert } from 'chai'

test('sine.in(.000000) is about 0', () => {
    assert.approximately(sine.in(0.0), 0, 0.0001)
})
test('sine.in(.250000) is about .07612046748871326', () => {
    assert.approximately(sine.in(0.25), 0.07612046748871326, 0.0001)
})
test('sine.in(.333333) is about .1339745962155613', () => {
    assert.approximately(sine.in(0.333333), 0.1339745962155613, 0.0001)
})
test('sine.in(.500000) is about .2928932188134524', () => {
    assert.approximately(sine.in(0.5), 0.2928932188134524, 0.0001)
})
test('sine.in(.666667) is about .4999999999999999', () => {
    assert.approximately(sine.in(0.666667), 0.4999999999999999, 0.0001)
})
test('sine.in(.750000) is about .6173165676349102', () => {
    assert.approximately(sine.in(0.75), 0.6173165676349102, 0.0001)
})
test('sine.in(1.000000) is about .9999999999999999', () => {
    assert.approximately(sine.in(1.0), 0.9999999999999999, 0.0001)
})

test('sine.out(.000000) is about 0', () => {
    assert.approximately(sine.out(0.0), 0, 0.0001)
})
test('sine.out(.250000) is about .3826834323650898', () => {
    assert.approximately(sine.out(0.25), 0.3826834323650898, 0.0001)
})
test('sine.out(.333333) is about .49999999999999994', () => {
    assert.approximately(sine.out(0.333333), 0.49999999999999994, 0.0001)
})
test('sine.out(.500000) is about .7071067811865475', () => {
    assert.approximately(sine.out(0.5), 0.7071067811865475, 0.0001)
})
test('sine.out(.666667) is about .8660254037844386', () => {
    assert.approximately(sine.out(0.666667), 0.8660254037844386, 0.0001)
})
test('sine.out(.750000) is about .9238795325112867', () => {
    assert.approximately(sine.out(0.75), 0.9238795325112867, 0.0001)
})
test('sine.out(1.000000) is about 1', () => {
    assert.approximately(sine.out(1.0), 1, 0.0001)
})

test('sine.inOut(.000000) is about 0', () => {
    assert.approximately(sine.inOut(0.0), 0, 0.0001)
})
test('sine.inOut(.250000) is about .1464466094067262', () => {
    assert.approximately(sine.inOut(0.25), 0.1464466094067262, 0.0001)
})
test('sine.inOut(.333333) is about .24999999999999994', () => {
    assert.approximately(sine.inOut(0.333333), 0.24999999999999994, 0.0001)
})
test('sine.inOut(.500000) is about .49999999999999994', () => {
    assert.approximately(sine.inOut(0.5), 0.49999999999999994, 0.0001)
})
test('sine.inOut(.666667) is about .7499999999999999', () => {
    assert.approximately(sine.inOut(0.666667), 0.7499999999999999, 0.0001)
})
test('sine.inOut(.750000) is about .8535533905932737', () => {
    assert.approximately(sine.inOut(0.75), 0.8535533905932737, 0.0001)
})
test('sine.inOut(1.000000) is about 1', () => {
    assert.approximately(sine.inOut(1.0), 1, 0.0001)
})
