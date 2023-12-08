/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let l = 0;
  let r = matrix.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    childMatrix = matrix[mid];
    let innerL = 0;
    let innerR = childMatrix.length - 1;
    if (childMatrix[innerL] > target) {
      r = mid - 1;
      continue;
    } else if (childMatrix[innerR] < target) {
      l = mid + 1;
      continue;
    }
    while (innerL <= innerR) {
      let innerMid = Math.floor((innerL + innerR) / 2);
      if (childMatrix[innerMid] == target) {
        return true;
      } else if (childMatrix[innerMid] > target) {
        innerR = innerMid - 1;
      } else {
        innerL = innerMid + 1;
      }
    }
    return false;
  }
  return false;
};