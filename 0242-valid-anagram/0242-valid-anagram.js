/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let tempObj = {};
    for(let a of s) {
        tempObj[a] = tempObj[a] ? tempObj[a]+1 : 1;
    }
    for(let b of t) {
        tempObj[b] = tempObj[b] ? tempObj[b]-1 : 1;
    }

    for(let key of Object.keys(tempObj)) {
        if (tempObj[key]) {
            return false;
        }
    }
    return true;
    
};