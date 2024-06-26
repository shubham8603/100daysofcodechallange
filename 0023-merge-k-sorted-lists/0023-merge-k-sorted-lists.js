/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
/**
* @param {ListNode[]} lists
* @return {ListNode}
*/
var mergeKLists = function(lists) {

if (lists.length === 0) return null;

const mergeTwoLists = (l1, l2) => {
    let dummy = new ListNode(0);
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    if (l1 !== null) {
        current.next = l1;
    } else if (l2 !== null) {
        current.next = l2;
    }

    return dummy.next;
};


const merge = (lists, left, right) => {
    if (left === right) return lists[left];
    if (left < right) {
        let mid = Math.floor((left + right) / 2);
        let l1 = merge(lists, left, mid);
        let l2 = merge(lists, mid + 1, right);
        return mergeTwoLists(l1, l2);
    }
    return null;
};

return merge(lists, 0, lists.length - 1);

};