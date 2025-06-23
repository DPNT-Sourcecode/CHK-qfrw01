var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const CheckoutSolution = require('../../../lib/solutions/CHK/checkout_solution');

describe('CHK challenge: calculating total checkout', function () {
    it('should return 3, which is the sum of 1 and 2', function () {
        assert.equal(new CheckoutSolution().checkout('AAABCDA'), 245);
    });
});