/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (r >= l) {
    let center = l + Math.floor((r-l) / 2);
    if (nums[center] == target) {
      return center;
    } 
    if (nums[center] > target) {
      r = center - 1;
    } else {
      l = center + 1
    }
  }
  return -1;
};