/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
/**
* @param {ListNode} head
* @return {number[]}
*/
var nextLargerNodes = function(head) {


let values = [];
while (head !== null) {
    values.push(head.val);
    head = head.next;
}

let n = values.length;
let result = new Array(n).fill(0);
let stack = [];

for (let i = 0; i < n; i++) {
    while (stack.length > 0 && values[stack[stack.length - 1]] < values[i]) {
        let index = stack.pop();
        result[index] = values[i];
    }
    stack.push(i);
}


return result;

};