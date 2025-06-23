var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const CheckoutSolution = require('../../../lib/solutions/CHK/checkout_solution');

describe('CHK challenge: calculating total checkout', function () {
    it('should return 0, for no items', function () {
        assert.equal(new CheckoutSolution().checkout(''), 0);
    });

    it('should return 80, for AB', function () {
        assert.equal(new CheckoutSolution().checkout('AB'), 80);
    });

    it('should return 200, for 5As', function () {
        assert.equal(new CheckoutSolution().checkout('AAAAA'), 200);
    });

    it('should return 330, for 8As', function () {
        assert.equal(new CheckoutSolution().checkout('AAAAAAAA'), 330);
    });

    it('should return 75, for 3Bs', function () {
        assert.equal(new CheckoutSolution().checkout('BBB'), 75);
    });

    it('should return 200, for 4Es and 4Bs', function () {
        assert.equal(new CheckoutSolution().checkout('EEEEBBBB'), 205);
    });

    it('should return 455, for a mixed complex basket', function () {
        assert.equal(new CheckoutSolution().checkout('AAABBBCCCDDDEEE'), 400);
    });

    it('should return 50, for 7Fs', function () {
        assert.equal(new CheckoutSolution().checkout('FFFFFFF'), 50);
    });

    it('should return 165, for a mixed complex basket with F ', function () {
        assert.equal(new CheckoutSolution().checkout('ABCDEF'), 165);
    });

    it('should return 165, for a mixed complex basket with F ', function () {
        assert.equal(new CheckoutSolution().checkout('UUU'), 120);
    });

});