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
            E: 0,
        }

        // set amount of each item
        for (let item of skus) {
            if (!('ABCDE'.includes(item))) return -1

            items[item]++;
        }

        // keeping track of the total checkout
        let res = 0;

        // find how many B items we get for free
        let freeB = Math.floor(items.E / 2);
        // update number of B items in our basket that we WILL pay for
        items.B = Math.max(0, items.B - freeB);

        // handle A offers, with the better offer coming first
        let fiveA = Math.floor(items.A / 5);
        res += fiveA * 200;
        items.A = items.A % 5

        res += Math.floor(items.A / 3) * 130 + (items.A % 3) * 50;

        // add the rest of the discounts/items
        res += Math.floor(items.B / 2) * 45 + (items.B % 2) * 30;

        res += items.C * 20;

        res += items.D * 15;

        res += items.E * 40;

        return res;
    }
}

module.exports = CheckoutSolution;



