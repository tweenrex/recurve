import { back } from '../../src/easings/back';
import { assert } from 'chai';

describe('back.in()', () => {
    it('easeInBack(.000000) is about 0', () => {
        assert.approximately(back.in(0.0), 0, 0.0001);
    });
    it('easeInBack(.250000) is about -.06413656250000001', () => {
        assert.approximately(back.in(0.25), -0.06413656250000001, 0.0001);
    });
    it('easeInBack(.333333) is about -.08900592592592595', () => {
        assert.approximately(back.in(0.333333), -0.08900592592592595, 0.0001);
    });
    it('easeInBack(.500000) is about -.08769750000000004', () => {
        assert.approximately(back.in(0.5), -0.08769750000000004, 0.0001);
    });
    it('easeInBack(.666667) is about .044210370370370254', () => {
        assert.approximately(back.in(0.666667), 0.044210370370370254, 0.0001);
    });
    it('easeInBack(.750000) is about .1825903124999999', () => {
        assert.approximately(back.in(0.75), 0.1825903124999999, 0.0001);
    });
    it('easeInBack(1.000000) is about .9999999999999998', () => {
        assert.approximately(back.in(1.0), 0.9999999999999998, 0.0001);
    });
});

describe('back.inOut()', () => {
    it('easeInOutBack(.000000) is about 0', () => {
        assert.approximately(back.inOut(0.0), 0, 0.0001);
    });
    it('easeInOutBack(.250000) is about -.09968184375', () => {
        assert.approximately(back.inOut(0.25), -0.09968184375, 0.0001);
    });
    it('easeInOutBack(.333333) is about -.0440673703703704', () => {
        assert.approximately(back.inOut(0.333333), -0.0440673703703704, 0.0001);
    });
    it('easeInOutBack(.500000) is about .5', () => {
        assert.approximately(back.inOut(0.5), 0.5, 0.0001);
    });
    it('easeInOutBack(.666667) is about 1.0440673703703702', () => {
        assert.approximately(back.inOut(0.666667), 1.0440673703703702, 0.0001);
    });
    it('easeInOutBack(.750000) is about 1.09968184375', () => {
        assert.approximately(back.inOut(0.75), 1.09968184375, 0.0001);
    });
    it('easeInOutBack(1.000000) is about 1', () => {
        assert.approximately(back.inOut(1.0), 1, 0.0001);
    });
});

describe('back.out()', () => {
    it('easeOutBack(.000000) is about 2.220446049250313e-16', () => {
        assert.approximately(back.out(0.0), 2.220446049250313e-16, 0.0001);
    });
    it('easeOutBack(.250000) is about .8174096875000001', () => {
        assert.approximately(back.out(0.25), 0.8174096875000001, 0.0001);
    });
    it('easeOutBack(.333333) is about .9557896296296297', () => {
        assert.approximately(back.out(0.333333), 0.9557896296296297, 0.0001);
    });
    it('easeOutBack(.500000) is about 1.0876975', () => {
        assert.approximately(back.out(0.5), 1.0876975, 0.0001);
    });
    it('easeOutBack(.666667) is about 1.089005925925926', () => {
        assert.approximately(back.out(0.666667), 1.089005925925926, 0.0001);
    });
    it('easeOutBack(.750000) is about 1.0641365625', () => {
        assert.approximately(back.out(0.75), 1.0641365625, 0.0001);
    });
    it('easeOutBack(1.000000) is about 1', () => {
        assert.approximately(back.out(1.0), 1, 0.0001);
    });
});
