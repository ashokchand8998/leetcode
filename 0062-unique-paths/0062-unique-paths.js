/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    // let hashMap = new Map();
    // let recurse = (x, y) => {
    //     if (x >= m || y >= n) {
    //         return 0;
    //     } else if (x == m - 1, y == n - 1) {
    //         return 1;
    //     }
    //     let down = hashMap.has((x + 1) + "_" + y) ? hashMap.get((x + 1) + "_" + y) : recurse(x + 1, y);
    //     let up = hashMap.has(x + "_" + (y + 1)) ? hashMap.get(x + "_" + (y + 1)) : recurse(x, y + 1);
    //     let total = up + down;
    //     hashMap.set(x + "_" + y, total);
    //     return total
    // }
    // return recurse(0, 0);
    let nCr = 1;
    let N = m + n - 2;
    let r = m - 1
    // console.log("cr", N, r)
    for (let i = 1; i <= r; i++) {
        nCr = nCr * (N-(r-i)) / i
    }
    return nCr;
};