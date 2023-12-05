/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let result = [];
    let stack = [];

    let tempSize = temperatures.length;
    for (let i = 0; i < tempSize - 1; i++) {
        let len = stack.length;
        while (len > 0) {
            if (temperatures[stack[len - 1]] < temperatures[i + 1]) {
                result[stack[len - 1]] = i + 1 - stack[len - 1];
                stack.pop();
                len--
            } else {
                break;
            }
        }
        if (temperatures[i] < temperatures[i + 1]) {
            result[i] = 1;
        } else {
            result[i] = 0;
            stack.push(i);
        }
    }
    result.push(0);
    return result;
};