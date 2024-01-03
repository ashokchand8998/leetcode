/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let p1 = 0;
    let p2 = p1 + 1;
    let profit = 0;

    while (p1 < p2 && p2 < prices.length) {
        if (prices[p1] > prices[p2]) {
            p1=p2;
            p2++
        } else {
            profit = Math.max(profit, prices[p2] - prices[p1]);
            p2++;
        }
    }
    return profit;

};