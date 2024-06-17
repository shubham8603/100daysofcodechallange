/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
      const getLength = (head) => {
        let length = 0;
        while (head !== null) {
            length++;
            head = head.next;
        }
        return length;
    };

    let lenA = getLength(headA);
    let lenB = getLength(headB);

    
    while (lenA > lenB) {
        headA = headA.next;
        lenA--;
    }
    while (lenB > lenA) {
        headB = headB.next;
        lenB--;
    }


    while (headA !== headB) {
        headA = headA.next;
        headB = headB.next;
    }


    return headA;
};