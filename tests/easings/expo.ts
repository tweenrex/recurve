import { expo } from '../../src/easings/expo'
import { assert } from 'chai'

describe('expo.in()', () => {
    it('expo.in(.000000) is about 0', () => {
        assert.approximately(expo.in(0.0), 0, 0.0001)
    })
    it('expo.in(.250000) is about .005524271728019903', () => {
        assert.approximately(expo.in(0.25), 0.005524271728019903, 0.0001)
    })
    it('expo.in(.333333) is about .009843133202303692', () => {
        assert.approximately(expo.in(0.333333), 0.009843133202303692, 0.0001)
    })
    it('expo.in(.500000) is about .03125', () => {
        assert.approximately(expo.in(0.5), 0.03125, 0.0001)
    })
    it('expo.in(.666667) is about .09921256574801245', () => {
        assert.approximately(expo.in(0.666667), 0.09921256574801245, 0.0001)
    })
    it('expo.in(.750000) is about .1767766952966369', () => {
        assert.approximately(expo.in(0.75), 0.1767766952966369, 0.0001)
    })
    it('expo.in(1.000000) is about 1', () => {
        assert.approximately(expo.in(1.0), 1, 0.0001)
    })
})

describe('expo.out()', () => {
    it('expo.out(.000000) is about 0', () => {
        assert.approximately(expo.out(0.0), 0, 0.0001)
    })
    it('expo.out(.250000) is about .8232233047033631', () => {
        assert.approximately(expo.out(0.25), 0.8232233047033631, 0.0001)
    })
    it('expo.out(.333333) is about .9007874342519875', () => {
        assert.approximately(expo.out(0.333333), 0.9007874342519875, 0.0001)
    })
    it('expo.out(.500000) is about .96875', () => {
        assert.approximately(expo.out(0.5), 0.96875, 0.0001)
    })
    it('expo.out(.666667) is about .9901568667976963', () => {
        assert.approximately(expo.out(0.666667), 0.9901568667976963, 0.0001)
    })
    it('expo.out(.750000) is about .99447572827198', () => {
        assert.approximately(expo.out(0.75), 0.99447572827198, 0.0001)
    })
    it('expo.out(1.000000) is about 1', () => {
        assert.approximately(expo.out(1.0), 1, 0.0001)
    })
})

describe('expo.inOut()', () => {
    it('expo.inOut(.000000) is about 0', () => {
        assert.approximately(expo.inOut(0.0), 0, 0.0001)
    })
    it('expo.inOut(.250000) is about .015625', () => {
        assert.approximately(expo.inOut(0.25), 0.015625, 0.0001)
    })
    it('expo.inOut(.333333) is about .04960628287400622', () => {
        assert.approximately(expo.inOut(0.333333), 0.04960628287400622, 0.0001)
    })
    it('expo.inOut(.500000) is about .5', () => {
        assert.approximately(expo.inOut(0.5), 0.5, 0.0001)
    })
    it('expo.inOut(.666667) is about .9503937171259937', () => {
        assert.approximately(expo.inOut(0.666667), 0.9503937171259937, 0.0001)
    })
    it('expo.inOut(.750000) is about .984375', () => {
        assert.approximately(expo.inOut(0.75), 0.984375, 0.0001)
    })
    it('expo.inOut(1.000000) is about 1', () => {
        assert.approximately(expo.inOut(1.0), 1, 0.0001)
    })
})
