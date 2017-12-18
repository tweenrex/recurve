import { elastic } from '../src/elastic'
import { assert } from 'chai'

test('elastic.in(.000000) is about 0', () => {
    assert.approximately(elastic.in(0.0), 0, 0.0001)
})
test('elastic.in(.250000) is about .0039062499999999952', () => {
    assert.approximately(elastic.in(0.25), 0.0039062499999999952, 0.0001)
})
test('elastic.in(.333333) is about -.004921566601151843', () => {
    assert.approximately(elastic.in(0.333333), -0.004921566601151843, 0.0001)
})
test('elastic.in(.500000) is about 1.1481063742006436e-17', () => {
    assert.approximately(elastic.in(0.5), 1.1481063742006436e-17, 0.0001)
})
test('elastic.in(.666667) is about .049606282874006216', () => {
    assert.approximately(elastic.in(0.666667), 0.049606282874006216, 0.0001)
})
test('elastic.in(.750000) is about -.12500000000000003', () => {
    assert.approximately(elastic.in(0.75), -0.12500000000000003, 0.0001)
})
test('elastic.in(1.000000) is about 1', () => {
    assert.approximately(elastic.in(1.0), 1, 0.0001)
})

test('elastic.out(.000000) is about 0', () => {
    assert.approximately(elastic.out(0.0), 0, 0.0001)
})
test('elastic.out(.250000) is about 1.125', () => {
    assert.approximately(elastic.out(0.25), 1.125, 0.0001)
})
test('elastic.out(.333333) is about .9503937171259939', () => {
    assert.approximately(elastic.out(0.333333), 0.9503937171259939, 0.0001)
})
test('elastic.out(.500000) is about 1', () => {
    assert.approximately(elastic.out(0.5), 1, 0.0001)
})
test('elastic.out(.666667) is about 1.004921566601152', () => {
    assert.approximately(elastic.out(0.666667), 1.004921566601152, 0.0001)
})
test('elastic.out(.750000) is about .99609375', () => {
    assert.approximately(elastic.out(0.75), 0.99609375, 0.0001)
})
test('elastic.out(1.000000) is about 1', () => {
    assert.approximately(elastic.out(1.0), 1, 0.0001)
})

test('elastic.inOut(.000000) is about 0', () => {
    assert.approximately(elastic.inOut(0.0), 0, 0.0001)
})
test('elastic.inOut(.250000) is about 5.740531871003218e-18', () => {
    assert.approximately(elastic.inOut(0.25), 5.740531871003218e-18, 0.0001)
})
test('elastic.inOut(.333333) is about .024803141437003108', () => {
    assert.approximately(elastic.inOut(0.333333), 0.024803141437003108, 0.0001)
})
test('elastic.inOut(.500000) is about .5', () => {
    assert.approximately(elastic.inOut(0.5), 0.5, 0.0001)
})
test('elastic.inOut(.666667) is about .975196858562997', () => {
    assert.approximately(elastic.inOut(0.666667), 0.975196858562997, 0.0001)
})
test('elastic.inOut(.750000) is about 1', () => {
    assert.approximately(elastic.inOut(0.75), 1, 0.0001)
})
test('elastic.inOut(1.000000) is about 1', () => {
    assert.approximately(elastic.inOut(1.0), 1, 0.0001)
})
