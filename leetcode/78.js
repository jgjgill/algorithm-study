// https://leetcode.com/problems/subsets/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const answer = []

  dfs([], 0)

  function dfs(check, index) {
    answer.push(check)

    for (let i = index; i < nums.length; i++) {
      dfs(check.concat(nums[i]), i + 1)
    }
  }

  return answer
}
