/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < nums.length - 3; i++) {
        let val1 = nums[i];
        if (i > 0 && val1 === nums[i - 1]) continue

        for (let j = i + 1; j < nums.length - 2; j++) {
            let val2 = nums[j];
            if (j > i + 1 && val2 === nums[j - 1]) continue

            let k = j + 1;
            let l = nums.length - 1;
            while (k < l) {
                let sum = val1 + val2 + nums[k] + nums[l];
                if (sum > target) {
                    l--
                } else if (sum < target) {
                    k++;
                } else {
                    result.push([val1, val2, nums[k], nums[l]]);
                    k++;
                    l--;
                    while (k < l && nums[k] === nums[k - 1]) k++;
                    while (k < l && nums[l] === nums[l + 1]) l--;
                }

            }
        }
    }
    return result
};