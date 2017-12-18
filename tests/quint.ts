import { quint } from '../src/quint'
import { assert } from 'chai'

test('quint.in(.000000) is about 0', () => {
    assert.approximately(quint.in(0.0), 0, 0.0001)
})
test('quint.in(.250000) is about .0009765625', () => {
    assert.approximately(quint.in(0.25), 0.0009765625, 0.0001)
})
test('quint.in(.333333) is about .004115226337448559', () => {
    assert.approximately(quint.in(0.333333), 0.004115226337448559, 0.0001)
})
test('quint.in(.500000) is about .03125', () => {
    assert.approximately(quint.in(0.5), 0.03125, 0.0001)
})
test('quint.in(.666667) is about .1316872427983539', () => {
    assert.approximately(quint.in(0.666667), 0.1316872427983539, 0.0001)
})
test('quint.in(.750000) is about .2373046875', () => {
    assert.approximately(quint.in(0.75), 0.2373046875, 0.0001)
})
test('quint.in(1.000000) is about 1', () => {
    assert.approximately(quint.in(1.0), 1, 0.0001)
})

test('quint.out(.000000) is about 0', () => {
    assert.approximately(quint.out(0.0), 0, 0.0001)
})
test('quint.out(.250000) is about .7626953125', () => {
    assert.approximately(quint.out(0.25), 0.7626953125, 0.0001)
})
test('quint.out(.333333) is about .868312757201646', () => {
    assert.approximately(quint.out(0.333333), 0.868312757201646, 0.0001)
})
test('quint.out(.500000) is about .96875', () => {
    assert.approximately(quint.out(0.5), 0.96875, 0.0001)
})
test('quint.out(.666667) is about .9958847736625515', () => {
    assert.approximately(quint.out(0.666667), 0.9958847736625515, 0.0001)
})
test('quint.out(.750000) is about .9990234375', () => {
    assert.approximately(quint.out(0.75), 0.9990234375, 0.0001)
})
test('quint.out(1.000000) is about 1', () => {
    assert.approximately(quint.out(1.0), 1, 0.0001)
})

test('quint.inOut(.000000) is about 0', () => {
    assert.approximately(quint.inOut(0.0), 0, 0.0001)
})
test('quint.inOut(.250000) is about .015625', () => {
    assert.approximately(quint.inOut(0.25), 0.015625, 0.0001)
})
test('quint.inOut(.333333) is about .06584362139917695', () => {
    assert.approximately(quint.inOut(0.333333), 0.06584362139917695, 0.0001)
})
test('quint.inOut(.500000) is about .5', () => {
    assert.approximately(quint.inOut(0.5), 0.5, 0.0001)
})
test('quint.inOut(.666667) is about .934156378600823', () => {
    assert.approximately(quint.inOut(0.666667), 0.934156378600823, 0.0001)
})
test('quint.inOut(.750000) is about .984375', () => {
    assert.approximately(quint.inOut(0.75), 0.984375, 0.0001)
})
test('quint.inOut(1.000000) is about 1', () => {
    assert.approximately(quint.inOut(1.0), 1, 0.0001)
})
