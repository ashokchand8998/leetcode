/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let maxArea = 0;
  let stack = [];
  for (let i = 0; i < heights.length; i++) {
    let start = i;
    while (stack.length && stack[0][1] > heights[i]) {
      let [index, height] = stack.shift();
      maxArea = Math.max(maxArea, (height * (i - index)))
      start = index;
    }
    stack.unshift([start, heights[i]])
  }
  for (let i = 0; i < stack.length; i++) {
    maxArea = Math.max(maxArea, stack[i][1] * (heights.length - stack[i][0]));
  }
  return maxArea;
};