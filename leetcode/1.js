// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  nums = nums.map((num, index) => [num, index]).sort((a, b) => a[0] - b[0])

  let start = 0
  let end = nums.length - 1

  while (nums[start][0] + nums[end][0] != target) {
    if (nums[start][0] + nums[end][0] > target) end -= 1
    else start += 1
  }

  return [nums[start][1], nums[end][1]]
}
