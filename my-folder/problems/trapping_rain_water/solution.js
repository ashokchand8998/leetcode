/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let l = 0;
    let r = height.length - 1;
    let leftMax = height[l];
    let rightMax = height[r];
    let total = 0;
    while (l < r) {
        if (leftMax < rightMax) {
            l++
            leftMax = Math.max(leftMax, height[l]);
            total += leftMax - height[l]
        } else {
            r--
            rightMax = Math.max(rightMax, height[r]);
            total += rightMax - height[r]
        }
    }
    return total;
};