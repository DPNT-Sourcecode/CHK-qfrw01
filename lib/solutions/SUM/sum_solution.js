'use strict';

class SumSolution {
    compute(x, y) {
        if (typeof x !== 'number' || typeof y !== 'number') return 'Enter valid numbers';
        return x + y;
    }
}

module.exports = SumSolution;
