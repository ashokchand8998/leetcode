/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let symbols = {
        '{': '}',
        '(': ')',
        '[': ']'
    }
    let foundSymbols = [];
    for (let symbol of s) {
        if (symbols[symbol]) {
            foundSymbols.unshift(symbol);
        } else if (symbol != symbols[foundSymbols.shift()]) {
            return false
        }
    }
    return foundSymbols.length == 0;
};