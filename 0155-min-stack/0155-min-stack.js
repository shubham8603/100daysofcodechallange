
var MinStack = function() {
   this.stack=[];
   this.minstack=[];
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if(this.minstack[this.minstack.length-1]>=val||this.minstack.length===0)
    this.minstack.push(val);
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
   let poppedvalue=this.stack.pop();
   if(this.minstack[this.minstack.length-1]===poppedvalue)
   this.minstack.pop();

    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length===0)return null;
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
        if(this.minstack.length===0)return null;
        return this.minstack[this.minstack.length-1];
    
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */