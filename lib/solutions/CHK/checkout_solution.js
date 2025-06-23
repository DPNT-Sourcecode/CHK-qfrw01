'use strict';

class CheckoutSolution {
    constructor() {
        // all items and their associated prices
        this.prices = {
            A: 50, B: 30, C: 20, D: 15, E: 40, F: 10, G: 20, H: 10, I: 35,
            J: 60, K: 80, L: 90, M: 15, N: 40, O: 10, P: 50, Q: 30, R: 50,
            S: 30, T: 20, U: 40, V: 50, W: 20, X: 90, Y: 10, Z: 50,
        }

        // all available offers (deals and free deals)
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
            N: { type: 'free', freeItem: 'M', buyQty: 3, freeQty: 1 },
            R: { type: 'free', freeItem: 'Q', buyQty: 3, freeQty: 1 },
            U: { type: 'free', freeItem: 'U', buyQty: 4, freeQty: 1 },
        }
    }

    checkout(skus) {
        if (typeof skus !== 'string') return -1;

        // initialise item counts 
        let items = {};

        for (let item in this.prices) {
            items[item] = 0;
        }

        // set amount of each item
        for (let item of skus) {
            if (!(item in this.prices)) return -1;
            items[item]++;
        }

        // apply free item offers:
        const freeOffers = ['E', 'N', 'R', 'U'];

        // checks for free offers and updates the number of payable items
        for (let item of freeOffers) {
            const offer = this.offers[item];
            if (offer && offer.type === 'free' && items[item] > 0) {
                const freeItemsGot = Math.floor(items[item] / offer.buyQty) * offer.freeQty;
                const freeItem = offer.freeItem;
                items[freeItem] = Math.max(0, items[freeItem] - freeItemsGot)
            }
        }

        // calculate the total cost for each item
        let total = 0;
        for (let item in items) {
            total += this.calculateItemCost(item, items[item])
        }

        return total;
    }

    calculateItemCost(item, quantity) {
        if (!quantity) return 0;

        const offer = this.offers[item];
        const regularPrice = this.prices[item];

        if (!offer || offer.type !== 'multi') {
            return quantity * regularPrice;
        }

        let remaining = quantity;
        let cost = 0;

        // sort deals by best value
        const sortedDeals = offer.deals.sort((a, b) => (a.price / a.qty) - (b.price / b.qty));

        for (let deal of sortedDeals) {
            const dealCount = Math.floor(remaining / deal.qty);
            cost += dealCount * deal.price;
            remaining -= dealCount * deal.qty;
        }

        // add cost of remaining items at their regular price
        cost += remaining * regularPrice;

        return cost;
    }
}

module.exports = CheckoutSolution;
