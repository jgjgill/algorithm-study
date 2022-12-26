// https://leetcode.com/problems/jump-game/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let max = 0
  let index = 0

  while (index < nums.length) {
    if (index !== nums.length - 1 && max === 0 && nums[index] === 0)
      return false

    max = Math.max(max, nums[index])
    index += 1
    max -= 1
  }

  return true
}
