
var MinStack = function () {
    this.values = [];
    this.minimum = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.values.unshift(val);
    this.minimum.unshift(Math.min(this.minimum.length == 0 ? val : this.minimum[0], val));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.values.length && this.minimum.length) {
        this.values.shift();
        this.minimum.shift();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.values.length > 0 ? this.values[0] : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minimum.length > 0 ? this.minimum[0] : null;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */