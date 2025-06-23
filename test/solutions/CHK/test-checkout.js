var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const CheckoutSolution = require('../../../lib/solutions/CHK/checkout_solution');

describe('CHK challenge: calculating total checkout', function () {
    it('should return 130, for A discount', function () {
        assert.equal(new CheckoutSolution().checkout('AAA'), 130);
    });

    it('should return 45, for B discount', function () {
        assert.equal(new CheckoutSolution().checkout('BB'), 45);
    });

    it('should return 115, which is the sum of all four items', function () {
        assert.equal(new CheckoutSolution().checkout('ABCD'), 115);
    });

    it('should return -1, for non-string input', function () {
        assert.equal(new CheckoutSolution().checkout(15), -1);
    });

    it('should return -1, for non-item input', function () {
        assert.equal(new CheckoutSolution().checkout('ABSDF'), -1);
    });

    it('should return -1, for multiple item combination input', function () {
        assert.equal(new CheckoutSolution().checkout('ABCCAABDBA'), 310);
    });
});