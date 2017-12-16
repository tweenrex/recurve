import { bounce } from '../../src/easings/bounce';
import { assert } from 'chai';

describe('bounce.in()', () => {
    it('bounce.in(.000000) is about 0', () => {
        assert.approximately(bounce.in(0.0), 0, 0.0001);
    });
    it('bounce.in(.250000) is about .02734375', () => {
        assert.approximately(bounce.in(0.25), 0.02734375, 0.0001);
    });
    it('bounce.in(.333333) is about .13888888888888873', () => {
        assert.approximately(bounce.in(0.333333), 0.13888888888888873, 0.0001);
    });
    it('bounce.in(.500000) is about .234375', () => {
        assert.approximately(bounce.in(0.5), 0.234375, 0.0001);
    });
    it('bounce.in(.666667) is about .1597222222222221', () => {
        assert.approximately(bounce.in(0.666667), 0.1597222222222221, 0.0001);
    });
    it('bounce.in(.750000) is about .52734375', () => {
        assert.approximately(bounce.in(0.75), 0.52734375, 0.0001);
    });
    it('bounce.in(1.000000) is about 1', () => {
        assert.approximately(bounce.in(1.0), 1, 0.0001);
    });
});

describe('bounce.inOut()', () => {
    it('bounce.inOut(.000000) is about 0', () => {
        assert.approximately(bounce.inOut(0.0), 0, 0.0001);
    });
    it('bounce.inOut(.250000) is about .1171875', () => {
        assert.approximately(bounce.inOut(0.25), 0.1171875, 0.0001);
    });
    it('bounce.inOut(.333333) is about .07986111111111105', () => {
        assert.approximately(bounce.inOut(0.333333), 0.07986111111111105, 0.0001);
    });
    it('bounce.inOut(.500000) is about .5', () => {
        assert.approximately(bounce.inOut(0.5), 0.5, 0.0001);
    });
    it('bounce.inOut(.666667) is about .9201388888888886', () => {
        assert.approximately(bounce.inOut(0.666667), 0.9201388888888886, 0.0001);
    });
    it('bounce.inOut(.750000) is about .8828125', () => {
        assert.approximately(bounce.inOut(0.75), 0.8828125, 0.0001);
    });
    it('bounce.inOut(1.000000) is about 1', () => {
        assert.approximately(bounce.inOut(1.0), 1, 0.0001);
    });
});

describe('bounce.out()', () => {
    it('bounce.out(.000000) is about 0', () => {
        assert.approximately(bounce.out(0.0), 0, 0.0001);
    });
    it('bounce.out(.250000) is about .47265625', () => {
        assert.approximately(bounce.out(0.25), 0.47265625, 0.0001);
    });
    it('bounce.out(.333333) is about .8402777777777777', () => {
        assert.approximately(bounce.out(0.333333), 0.8402777777777777, 0.0001);
    });
    it('bounce.out(.500000) is about .765625', () => {
        assert.approximately(bounce.out(0.5), 0.765625, 0.0001);
    });
    it('bounce.out(.666667) is about .8611111111111112', () => {
        assert.approximately(bounce.out(0.666667), 0.8611111111111112, 0.0001);
    });
    it('bounce.out(.750000) is about .97265625', () => {
        assert.approximately(bounce.out(0.75), 0.97265625, 0.0001);
    });
    it('bounce.out(1.000000) is about 1', () => {
        assert.approximately(bounce.out(1.0), 1, 0.0001);
    });
});
