/**
 * @param {string} s
 * @return {string}
 */
var lastNonEmptyString = function(s) {
    
    let result = "";
    let tempMap = new Map();
    for (let i=0; i<s.length; i++) {
        if (tempMap.has(s[i])) {
            tempMap.set(s[i], tempMap.get(s[i])+1);
        } else {
            tempMap.set(s[i], 1);
        }
    }
    
    let maxChar = Math.max(...tempMap.values());
    
    let removedMap = new Map();
    for (let i=0; i<s.length; i++) {
        let eVal = removedMap.get(s[i]) || 0;
        if (eVal+1 !== maxChar) {
            removedMap.set(s[i], eVal+1);
        } else {
            result+=s[i];
        }
    }
    return result;
};