import { cubicBezier } from '../src/cubicBezier';
import { assert } from 'chai';

test('easeIn(0) is about 0', () => {
    assert.approximately(cubicBezier(0.42, 0, 1, 1)(0), 0, 0.0001);
});
test('easeIn(.250000) is about .093460', () => {
    assert.approximately(cubicBezier(0.42, 0, 1, 1)(0.25), 0.09346, 0.0001);
});
test('easeIn(.333333) is about .156164', () => {
    assert.approximately(cubicBezier(0.42, 0, 1, 1)(0.333333), 0.156164, 0.0001);
});
test('easeIn(.500000) is about .315355', () => {
    assert.approximately(cubicBezier(0.42, 0, 1, 1)(0.5), 0.315355, 0.0001);
});
test('easeIn(.666667) is about .511649', () => {
    assert.approximately(cubicBezier(0.42, 0, 1, 1)(0.666667), 0.511649, 0.0001);
});
test('easeIn(.750000) is about .621854', () => {
    assert.approximately(cubicBezier(0.42, 0, 1, 1)(0.75), 0.621854, 0.0001);
});
test('easeIn(1) is about 1', () => {
    assert.approximately(cubicBezier(0.42, 0, 1, 1)(1), 1, 0.0001);
});

// test easeOut as cubic bezier
test('easeOut(0) is about 0', () => {
    assert.approximately(cubicBezier(0, 0, 0.58, 1)(0), 0, 0.0001);
});
test('easeOut(.250000) is about .378146', () => {
    assert.approximately(cubicBezier(0, 0, 0.58, 1)(0.25), 0.378146, 0.0001);
});
test('easeOut(.333333) is about .488351', () => {
    assert.approximately(cubicBezier(0, 0, 0.58, 1)(0.333333), 0.488351, 0.0001);
});
test('easeOut(.500000) is about .684645', () => {
    assert.approximately(cubicBezier(0, 0, 0.58, 1)(0.5), 0.684645, 0.0001);
});
test('easeOut(.666667) is about .843836', () => {
    assert.approximately(cubicBezier(0, 0, 0.58, 1)(0.666667), 0.843836, 0.0001);
});
test('easeOut(.750000) is about .906540', () => {
    assert.approximately(cubicBezier(0, 0, 0.58, 1)(0.75), 0.90654, 0.0001);
});
test('easeOut(1) is about 1', () => {
    assert.approximately(cubicBezier(0, 0, 0.58, 1)(1), 1, 0.0001);
});

// test easeInOut as cubicBezier
test('easeInOut(0) is about 0', () => {
    assert.approximately(cubicBezier(0.42, 0, 0.58, 1)(0), 0, 0.0001);
});
test('easeInOut(.250000) is about .129164', () => {
    assert.approximately(cubicBezier(0.42, 0, 0.58, 1)(0.25), 0.129164, 0.0001);
});
test('easeInOut(.333333) is about .231776', () => {
    assert.approximately(cubicBezier(0.42, 0, 0.58, 1)(0.333333), 0.231776, 0.0001);
});
test('easeInOut(.500000) is about .500000', () => {
    assert.approximately(cubicBezier(0.42, 0, 0.58, 1)(0.5), 0.5, 0.0001);
});
test('easeInOut(.666667) is about .768224', () => {
    assert.approximately(cubicBezier(0.42, 0, 0.58, 1)(0.666667), 0.768224, 0.0001);
});
test('easeInOut(.750000) is about .870836', () => {
    assert.approximately(cubicBezier(0.42, 0, 0.58, 1)(0.75), 0.870836, 0.0001);
});
test('easeInOut(1) is about 1', () => {
    assert.approximately(cubicBezier(0.42, 0, 0.58, 1)(1), 1, 0.0001);
});
