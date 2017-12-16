import { quart } from '../../src/easings/power'
import { assert } from 'chai'

describe('quart.in()', () => {
    it('quart.in(.000000) is about 0', () => {
        assert.approximately(quart.in(0.0), 0, 0.0001)
    })
    it('quart.in(.250000) is about .00390625', () => {
        assert.approximately(quart.in(0.25), 0.00390625, 0.0001)
    })
    it('quart.in(.333333) is about .012345679012345678', () => {
        assert.approximately(quart.in(0.333333), 0.012345679012345678, 0.0001)
    })
    it('quart.in(.500000) is about .0625', () => {
        assert.approximately(quart.in(0.5), 0.0625, 0.0001)
    })
    it('quart.in(.666667) is about .19753086419753085', () => {
        assert.approximately(quart.in(0.666667), 0.19753086419753085, 0.0001)
    })
    it('quart.in(.750000) is about .31640625', () => {
        assert.approximately(quart.in(0.75), 0.31640625, 0.0001)
    })
    it('quart.in(1.000000) is about 1', () => {
        assert.approximately(quart.in(1.0), 1, 0.0001)
    })
})

describe('quart.out()', () => {
    it('quart.out(.000000) is about 0', () => {
        assert.approximately(quart.out(0.0), 0, 0.0001)
    })
    it('quart.out(.250000) is about .68359375', () => {
        assert.approximately(quart.out(0.25), 0.68359375, 0.0001)
    })
    it('quart.out(.333333) is about .802469135802469', () => {
        assert.approximately(quart.out(0.333333), 0.802469135802469, 0.0001)
    })
    it('quart.out(.500000) is about .9375', () => {
        assert.approximately(quart.out(0.5), 0.9375, 0.0001)
    })
    it('quart.out(.666667) is about .9876543209876543', () => {
        assert.approximately(quart.out(0.666667), 0.9876543209876543, 0.0001)
    })
    it('quart.out(.750000) is about .99609375', () => {
        assert.approximately(quart.out(0.75), 0.99609375, 0.0001)
    })
    it('quart.out(1.000000) is about 1', () => {
        assert.approximately(quart.out(1.0), 1, 0.0001)
    })
})

describe('quart.inOut()', () => {
    it('quart.inOut(.000000) is about 0', () => {
        assert.approximately(quart.inOut(0.0), 0, 0.0001)
    })
    it('quart.inOut(.250000) is about .03125', () => {
        assert.approximately(quart.inOut(0.25), 0.03125, 0.0001)
    })
    it('quart.inOut(.333333) is about .09876543209876543', () => {
        assert.approximately(quart.inOut(0.333333), 0.09876543209876543, 0.0001)
    })
    it('quart.inOut(.500000) is about .5', () => {
        assert.approximately(quart.inOut(0.5), 0.5, 0.0001)
    })
    it('quart.inOut(.666667) is about .9012345679012346', () => {
        assert.approximately(quart.inOut(0.666667), 0.9012345679012346, 0.0001)
    })
    it('quart.inOut(.750000) is about .96875', () => {
        assert.approximately(quart.inOut(0.75), 0.96875, 0.0001)
    })
    it('quart.inOut(1.000000) is about 1', () => {
        assert.approximately(quart.inOut(1.0), 1, 0.0001)
    })
})
