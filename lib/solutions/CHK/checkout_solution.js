'use strict';

class CheckoutSolution {
    constructor() {
        this.prices = {
            A: 50, B: 30, C: 20, D: 15, E: 40, F: 10, G: 20, H: 10, I: 35,
            J: 60, K: 80, L: 90, M: 15, N: 40, O: 10, P: 50, Q: 30, R: 50,
            S: 30, T: 20, U: 40, V: 50, W: 20, X: 90, Y: 10, Z: 50,
        }

        this.offers = {
            A: { type: 'multi', deals: [{ qty: 5, price: 200 }, { qty: 3, price: 130 }] },
            B: { type: 'multi', deals: [{ qty: 2, price: 45 }] },
            F: { type: 'multi', deals: [{ qty: 3, price: 20 }] },
            H: { type: 'multi', deals: [{ qty: 10, price: 80 }, { qty: 5, price: 45 }] },
            K: { type: 'multi', deals: [{ qty: 2, price: 150 }] },
            P: { type: 'multi', deals: [{ qty: 5, price: 200 }] },
            Q: { type: 'multi', deals: [{ qty: 3, price: 80 }] },
            V: { type: 'multi', deals: [{ qty: 3, price: 130 }, { qty: 2, price: 90 }] },

            E: { type: 'free', freeItem: 'B', buyQty: 2, freeQty: 1 },
            N: { type: 'free', freeItem: 'N', buyQty: 3, freeQty: 1 },
            R: { type: 'free', freeItem: 'Q', buyQty: 3, freeQty: 1 },
            U: { type: 'free', freeItem: 'U', buyQty: 3, freeQty: 1 },
        }
    }

    checkout(skus) {
        if (typeof skus !== 'string') return -1;

        // initialise item counts 
        items = {}

        for (let item in this.prices) {
            items[item] = 0;
        }

        // set amount of each item
        for (let item of skus) {
            if (!(item in this.prices)) return -1;
            items[item]++;
        }


        // keeping track of the total checkout
        let res = 0;

        // find how many B items we get for free
        let freeB = Math.floor(items.E / 2);
        // update number of B items in our basket that we WILL pay for
        items.B = Math.max(0, items.B - freeB);

        // handle F offers, where for every 3 Fs, we pay for 2
        let freeF = Math.floor(items.F / 3);
        let paidF = items.F - freeF;

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

        res += paidF * 10;

        return res;
    }
}

module.exports = CheckoutSolution;

