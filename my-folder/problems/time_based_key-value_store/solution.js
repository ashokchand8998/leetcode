
var TimeMap = function () {
    this.map = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    let tempMap = this.map[key] || [];
    tempMap.push([value, timestamp]);
    this.map[key] = tempMap;
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
    let keys = this.map[key] || [];
    let l = 0;
    let r = keys.length - 1;
    let result = "";
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (keys[mid][1] <= timestamp) {
            result = keys[mid][0];
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return result;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */