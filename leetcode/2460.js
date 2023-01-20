// https://leetcode.com/problems/apply-operations-to-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  const length = nums.length

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2
      nums[i + 1] = 0
    }
  }

  const answer = nums.filter((num) => num !== 0)

  while (answer.length !== length) {
    answer.push(0)
  }

  return answer
}
