/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxVol = 0;
    let start = 0;
    let end = height.length-1;
    while(start < end) {
        let h1 = height[start];
        let h2 = height[end];
        let tempVol = Math.min(h1, h2) * (end-start);
        
        if (tempVol > maxVol) {
            maxVol = tempVol;
        }
        if (h2 < h1) {
            end--;
        } else {
            start++
        }
    }
    return maxVol;
};