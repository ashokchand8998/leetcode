/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/*
store anagrams as array values with the sorted form of word as key in map or object.
this will help keep track of past and any new found anagram of a word

additional function would be required for getting sorted string in our case
*/
var groupAnagrams = function (strs) {
    getSortedStr = (str) => {
        return str.split('').sort().join('');
    }

    let resultHashMap = new Map();

    for (let val of strs) {
        let sortedStr = getSortedStr(val);
        let existingArr = resultHashMap.get(sortedStr) || []
        existingArr.push(val)
        resultHashMap.set(sortedStr, existingArr);
    }
    return [...resultHashMap.values()]
}