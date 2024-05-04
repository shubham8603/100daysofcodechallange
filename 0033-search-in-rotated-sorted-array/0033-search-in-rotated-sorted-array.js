/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

   let s = 0;
    let l = nums.length - 1;
    let mid;

    while (s <= l) {
        mid = Math.floor((s + l) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[s] <= nums[mid]) {
            if (target >= nums[s] && target <= nums[mid]) {
                l = mid - 1;
            } else {
                s = mid + 1;
            }
        } else {
            if (target >= nums[mid] && target <= nums[l]) {
                s = mid + 1;
            } else {
                l = mid - 1;
            }
        }
    }

    return -1;
};