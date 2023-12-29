/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let sLen = s.length;
    let result = [];
    depth = 0;
    i = 0;
    do {
        if (depth == 0) {
            result.push(s.slice(i, i + numRows).split(""));
            i += numRows
        } else {
            let temp = new Array(numRows);
            temp[numRows - 1 - depth] = s[i];
            result.push(temp);
            i++;
        }
        depth++
        if (depth >= numRows - 1) {
            depth = 0;
        }
    } while (i < sLen)
    console.log("result", result)
    let str = "";
    for (let j = 0; j < numRows; j++) {
        str += result.map((val) => val[j]).join("");
    }
    return str;
};