'use strict';

class CheckoutSolution {
    // skus is expected to be a string

    checkout(skus) {
        if (typeof skus !== 'string') return -1;

        // initialise items with number of items
        let items = {
            A: 0,
            B: 0,
            C: 0,
            D: 0,
        }

        // set amount of each item
        for (let item of skus) {
            items[item]++;
        }

        // keeping track of the total checkout
        let res = 0;


        // add the checkout for each item, including their discount
        res += Math.floor(items.A / 3) * 130 + (items.A % 3) * 50;

        res += Math.floor(items.B / 2) * 45 + (items.B % 2) * 30;

        res += items.C * 20;

        res += items.D * 15;

        return res;
    }
}

module.exports = CheckoutSolution;

