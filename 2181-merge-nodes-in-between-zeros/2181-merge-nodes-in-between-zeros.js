/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {

     this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var mergeNodes = function(head) {
    
    let dummy = new ListNode(0);
    let current = dummy;
    
    
    let pointer = head.next; 
    let sum = 0;
    
    while (pointer) {
        if (pointer.val === 0) {
            
            current.next = new ListNode(sum);
            current = current.next;
            
            sum = 0;
        } else {
           
            sum += pointer.val;
        }
        
        pointer = pointer.next;
    }
    
    return dummy.next; 
    
};