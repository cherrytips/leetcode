var MinStack = function () {
  this.array = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.array[this.array.length] = val;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let pop = this.array[this.array.length - 1];
  this.array = this.array.slice(0, this.array.length - 1);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.array[this.array.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < this.array.length; i++) {
    if (this.array[i] < min) min = this.array[i];
  }

  return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
