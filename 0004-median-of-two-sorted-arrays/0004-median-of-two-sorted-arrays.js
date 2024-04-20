/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    nums=[...nums1,...nums2];
    nums.sort((a,b)=>a-b);
    const n = nums.length;
    if (n % 2 === 0) {
        return (nums[n / 2 - 1] + nums[n / 2]) / 2;
    } else {
        return nums[Math.floor(n / 2)];
    }
    
};