/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let l = 1;
    sortedPiles = piles.sort((a, b) => a - b);
    let r = sortedPiles[piles.length - 1];
    let result = r;

    calculateSum = (val) => {
        return sortedPiles.reduce((total, num) => {
            return total + (Math.ceil(num / val));
        }, 0);
    }

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        let val = calculateSum(mid);
        if (val <= h) {
            r = mid - 1;
            result = Math.min(mid, result);
        } else if (val > h) {
            l = mid + 1;
        }
    }
    return result;
};