import { quad } from '../src/quad'
import { assert } from 'chai'

test('quad.in(.000000) is about 0', () => {
    assert.approximately(quad.in(0.0), 0, 0.0001)
})
test('quad.in(.250000) is about .0625', () => {
    assert.approximately(quad.in(0.25), 0.0625, 0.0001)
})
test('quad.in(.333333) is about .1111111111111111', () => {
    assert.approximately(quad.in(0.333333), 0.1111111111111111, 0.0001)
})
test('quad.in(.500000) is about .25', () => {
    assert.approximately(quad.in(0.5), 0.25, 0.0001)
})
test('quad.in(.666667) is about .4444444444444444', () => {
    assert.approximately(quad.in(0.666667), 0.4444444444444444, 0.0001)
})
test('quad.in(.750000) is about .5625', () => {
    assert.approximately(quad.in(0.75), 0.5625, 0.0001)
})
test('quad.in(1.000000) is about 1', () => {
    assert.approximately(quad.in(1.0), 1, 0.0001)
})

test('quad.out(.000000) is about 0', () => {
    assert.approximately(quad.out(0.0), 0, 0.0001)
})
test('quad.out(.250000) is about .4375', () => {
    assert.approximately(quad.out(0.25), 0.4375, 0.0001)
})
test('quad.out(.333333) is about .5555555555555556', () => {
    assert.approximately(quad.out(0.333333), 0.5555555555555556, 0.0001)
})
test('quad.out(.500000) is about .75', () => {
    assert.approximately(quad.out(0.5), 0.75, 0.0001)
})
test('quad.out(.666667) is about .888888888888889', () => {
    assert.approximately(quad.out(0.666667), 0.888888888888889, 0.0001)
})
test('quad.out(.750000) is about .9375', () => {
    assert.approximately(quad.out(0.75), 0.9375, 0.0001)
})
test('quad.out(1.000000) is about 1', () => {
    assert.approximately(quad.out(1.0), 1, 0.0001)
})

test('quad.inOut(.000000) is about 0', () => {
    assert.approximately(quad.inOut(0.0), 0, 0.0001)
})
test('quad.inOut(.250000) is about .125', () => {
    assert.approximately(quad.inOut(0.25), 0.125, 0.0001)
})
test('quad.inOut(.333333) is about .2222222222222222', () => {
    assert.approximately(quad.inOut(0.333333), 0.2222222222222222, 0.0001)
})
test('quad.inOut(.500000) is about .5', () => {
    assert.approximately(quad.inOut(0.5), 0.5, 0.0001)
})
test('quad.inOut(.666667) is about .7777777777777777', () => {
    assert.approximately(quad.inOut(0.666667), 0.7777777777777777, 0.0001)
})
test('quad.inOut(.750000) is about .875', () => {
    assert.approximately(quad.inOut(0.75), 0.875, 0.0001)
})
test('quad.inOut(1.000000) is about 1', () => {
    assert.approximately(quad.inOut(1.0), 1, 0.0001)
})
