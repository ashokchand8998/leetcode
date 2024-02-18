/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    let count = 0;
    
    for (let i=0; i< words.length-1; i++) {
        let w = words[i];
        for (j=i+1; j < words.length; j++) {
            let nextWord = words[j];
            if ((w.length <= nextWord.length) && (nextWord.slice(0,w.length) === w) && nextWord.slice(nextWord.length-w.length) === w ) {
                count++
            }
        }
    }
    return count;
};