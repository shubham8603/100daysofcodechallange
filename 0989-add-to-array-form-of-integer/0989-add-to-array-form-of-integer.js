/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let v = [];
    let i = num.length - 1;
    while (i >= 0 || k > 0) {
        if (i >= 0) {
            v.push((num[i] + k) % 10);
            k = Math.floor((num[i] + k) / 10);
        } else {
            v.push(k % 10);
            k = Math.floor(k / 10);
        }
        i = i - 1;
    }

    v.reverse();

    return v;
};