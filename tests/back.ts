import { back } from '../src/back';
import { assert } from 'chai';

test('back.in(.000000) is about 0', () => {
    assert.approximately(back.in(0.0), 0, 0.0001);
});
test('back.in(.250000) is about -.06413656250000001', () => {
    assert.approximately(back.in(0.25), -0.06413656250000001, 0.0001);
});
test('back.in(.333333) is about -.08900592592592595', () => {
    assert.approximately(back.in(0.333333), -0.08900592592592595, 0.0001);
});
test('back.in(.500000) is about -.08769750000000004', () => {
    assert.approximately(back.in(0.5), -0.08769750000000004, 0.0001);
});
test('back.in(.666667) is about .044210370370370254', () => {
    assert.approximately(back.in(0.666667), 0.044210370370370254, 0.0001);
});
test('back.in(.750000) is about .1825903124999999', () => {
    assert.approximately(back.in(0.75), 0.1825903124999999, 0.0001);
});
test('back.in(1.000000) is about .9999999999999998', () => {
    assert.approximately(back.in(1.0), 0.9999999999999998, 0.0001);
});

test('back.out(.000000) is about 2.220446049250313e-16', () => {
    assert.approximately(back.out(0.0), 2.220446049250313e-16, 0.0001);
});
test('back.out(.250000) is about .8174096875000001', () => {
    assert.approximately(back.out(0.25), 0.8174096875000001, 0.0001);
});
test('back.out(.333333) is about .9557896296296297', () => {
    assert.approximately(back.out(0.333333), 0.9557896296296297, 0.0001);
});
test('back.out(.500000) is about 1.0876975', () => {
    assert.approximately(back.out(0.5), 1.0876975, 0.0001);
});
test('back.out(.666667) is about 1.089005925925926', () => {
    assert.approximately(back.out(0.666667), 1.089005925925926, 0.0001);
});
test('back.out(.750000) is about 1.0641365625', () => {
    assert.approximately(back.out(0.75), 1.0641365625, 0.0001);
});
test('back.out(1.000000) is about 1', () => {
    assert.approximately(back.out(1.0), 1, 0.0001);
});

test('back.inOut(.000000) is about 0', () => {
    assert.approximately(back.inOut(0.0), 0, 0.0001);
});
test('back.inOut(.250000) is about -.09968184375', () => {
    assert.approximately(back.inOut(0.25), -0.04384875, 0.0001);
});
test('back.inOut(.333333) is about -.0440673703703704', () => {
    assert.approximately(back.inOut(0.333333), 0.02210474, 0.0001);
});
test('back.inOut(.500000) is about .5', () => {
    assert.approximately(back.inOut(0.5), 0.5, 0.0001);
});
test('back.inOut(.666667) is about 1.0440673703703702', () => {
    assert.approximately(back.inOut(0.666667), 0.97789525, 0.0001);
});
test('back.inOut(.750000) is about 1.09968184375', () => {
    assert.approximately(back.inOut(0.75), 1.04384875, 0.0001);
});
test('back.inOut(1.000000) is about 1', () => {
    assert.approximately(back.inOut(1.0), 1, 0.0001);
});
