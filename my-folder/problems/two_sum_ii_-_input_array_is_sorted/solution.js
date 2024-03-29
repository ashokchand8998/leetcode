/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let start = 0;
    let end = numbers.length - 1;
    while (start < end) {
        let tempTotal = numbers[start] + numbers[end];
        if (tempTotal == target) {
            return [start+1, end+1]
        }
        if (tempTotal < target) {
            start++
        } else {
            end--
        }
    }
};