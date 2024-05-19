var MyStack = function() {
    this.queue1 = [];
    this.queue2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
    }
    const poppedValue = this.queue1.shift();
    // Swap the queues
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
    return poppedValue;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
    }
    const topValue = this.queue1[0]; // Peek the last element
    this.queue2.push(this.queue1.shift()); // Move the last element to queue2
    // Swap the queues
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
    return topValue;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue1.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
