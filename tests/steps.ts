import { steps } from '../src/steps'
import { assert } from 'chai'

test('steps(4, "start")(0) is 0', () => {
    assert.approximately(steps(4, 'start')(0), 0, 0.0001)
})
test('steps(4, "start")(.250000) is 0.25', () => {
    assert.approximately(steps(4, 'start')(0.25), 0.25, 0.0001)
})
test('steps(4, "start")(.333333) is 0.5', () => {
    assert.approximately(steps(4, 'start')(0.333333), 0.5, 0.0001)
})
test('steps(4, "start")(.500000) is 0.5', () => {
    assert.approximately(steps(4, 'start')(0.5), 0.5, 0.0001)
})
test('steps(4, "start")(.666667) is 0.75', () => {
    assert.approximately(steps(4, 'start')(0.666667), 0.75, 0.0001)
})
test('steps(4, "start")(.750000) is 0.75', () => {
    assert.approximately(steps(4, 'start')(0.75), 0.75, 0.0001)
})
test('steps(4, "start")(1) is 1', () => {
    assert.approximately(steps(4, 'start')(1), 1, 0.0001)
})

test('steps(4, "end")(0) is 0', () => {
    assert.approximately(steps(4, 'end')(0), 0, 0.0001)
})
test('steps(4, "end")(.250000) is about 1', () => {
    assert.approximately(steps(4, 'end')(0.25), 0.25, 0.0001)
})
test('steps(4, "end")(.333333) is about 1', () => {
    assert.approximately(steps(4, 'end')(0.333333), 0.25, 0.0001)
})
test('steps(4, "end")(.500000) is about 1', () => {
    assert.approximately(steps(4, 'end')(0.5), 0.5, 0.0001)
})
test('steps(4, "end")(.666667) is about 1', () => {
    assert.approximately(steps(4, 'end')(0.666667), 0.5, 0.0001)
})
test('steps(4, "end")(.750000) is about 1', () => {
    assert.approximately(steps(4, 'end')(0.75), 0.75, 0.0001)
})
test('steps(4, "end")(1) is about 1', () => {
    assert.approximately(steps(4, 'end')(1), 1, 0.0001)
})
