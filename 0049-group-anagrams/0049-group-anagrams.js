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
    function getSorted(word) {
        return word.split("").sort().join("");
    }
    let final = new Map();
    for (let word of strs) {
        let sortedWord = getSorted(word);
        let finalFound = final.get(sortedWord) || []
        finalFound.push(word);
        final.set(sortedWord, finalFound);
    }
    return [...final.values()];
}