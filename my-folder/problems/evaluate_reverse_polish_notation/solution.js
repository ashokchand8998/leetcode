/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let calculatedStack = [];
    let operationsMap = new Map();
    operationsMap.set('+', (num1, num2) => num1 + num2)
    operationsMap.set('*', (num1, num2) => num1 * num2)
    operationsMap.set('/', (num1, num2) => parseInt(num1 / num2))
    operationsMap.set('-', (num1, num2) => num1 - num2)
    for (let i = 0; i < tokens.length; i++) {
        if (operationsMap.has(tokens[i])) {
            let num2 = calculatedStack.shift();
            let num1 = calculatedStack.shift();
            calculatedStack.unshift(operationsMap.get(tokens[i])(Number(num1), Number(num2)))
        } else {
            calculatedStack.unshift(tokens[i]);
        }
    }
    return calculatedStack.shift();
};