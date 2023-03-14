// https://leetcode.com/problems/find-pivot-index/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  const sum = nums.reduce((acc, cur) => acc + cur)
  let left = 0
  let right = sum
  
  for (let i = 0; i < nums.length; i++) {
    right -= nums[i]
    if (left === right) return i
    left += nums[i]
  }

  return -1
};