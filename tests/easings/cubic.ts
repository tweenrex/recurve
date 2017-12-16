import { cubic } from '../../src/easings/power'
import { assert } from 'chai'

describe('cubic.in()', () => {
    it('cubic.in(.000000) is about 0', () => {
        assert.approximately(cubic.in(0.0), 0, 0.0001)
    })
    it('cubic.in(.250000) is about .015625', () => {
        assert.approximately(cubic.in(0.25), 0.015625, 0.0001)
    })
    it('cubic.in(.333333) is about .037037037037037035', () => {
        assert.approximately(cubic.in(0.333333), 0.037037037037037035, 0.0001)
    })
    it('cubic.in(.500000) is about .125', () => {
        assert.approximately(cubic.in(0.5), 0.125, 0.0001)
    })
    it('cubic.in(.666667) is about .2962962962962963', () => {
        assert.approximately(cubic.in(0.666667), 0.2962962962962963, 0.0001)
    })
    it('cubic.in(.750000) is about .421875', () => {
        assert.approximately(cubic.in(0.75), 0.421875, 0.0001)
    })
    it('cubic.in(1.000000) is about 1', () => {
        assert.approximately(cubic.in(1.0), 1, 0.0001)
    })
})

describe('cubic.out()', () => {
    it('cubic.out(.000000) is about 0', () => {
        assert.approximately(cubic.out(0.0), 0, 0.0001)
    })
    it('cubic.out(.250000) is about .578125', () => {
        assert.approximately(cubic.out(0.25), 0.578125, 0.0001)
    })
    it('cubic.out(.333333) is about .7037037037037036', () => {
        assert.approximately(cubic.out(0.333333), 0.7037037037037036, 0.0001)
    })
    it('cubic.out(.500000) is about .875', () => {
        assert.approximately(cubic.out(0.5), 0.875, 0.0001)
    })
    it('cubic.out(.666667) is about .9629629629629629', () => {
        assert.approximately(cubic.out(0.666667), 0.9629629629629629, 0.0001)
    })
    it('cubic.out(.750000) is about .984375', () => {
        assert.approximately(cubic.out(0.75), 0.984375, 0.0001)
    })
    it('cubic.out(1.000000) is about 1', () => {
        assert.approximately(cubic.out(1.0), 1, 0.0001)
    })
})

describe('cubic.inOut()', () => {
    it('cubic.inOut(.000000) is about 0', () => {
        assert.approximately(cubic.inOut(0.0), 0, 0.0001)
    })
    it('cubic.inOut(.250000) is about .0625', () => {
        assert.approximately(cubic.inOut(0.25), 0.0625, 0.0001)
    })
    it('cubic.inOut(.333333) is about .14814814814814814', () => {
        assert.approximately(cubic.inOut(0.333333), 0.14814814814814814, 0.0001)
    })
    it('cubic.inOut(.500000) is about .5', () => {
        assert.approximately(cubic.inOut(0.5), 0.5, 0.0001)
    })
    it('cubic.inOut(.666667) is about .8518518518518519', () => {
        assert.approximately(cubic.inOut(0.666667), 0.8518518518518519, 0.0001)
    })
    it('cubic.inOut(.750000) is about .9375', () => {
        assert.approximately(cubic.inOut(0.75), 0.9375, 0.0001)
    })
    it('cubic.inOut(1.000000) is about 1', () => {
        assert.approximately(cubic.inOut(1.0), 1, 0.0001)
    })
})
