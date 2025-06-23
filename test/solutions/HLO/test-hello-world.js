var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const HelloSolution = require('../../../lib/solutions/HLO/hello_solution');

describe('HLO challenge: Greeting our friends', function () {
    it('should return Hello, John!', function () {
        assert.equal(new HelloSolution().hello('John'), "Hello, John!");
    });
});