// https://leetcode.com/problems/longest-subsequence-with-limited-sum/

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  const answer = []
  nums.sort((a, b) => a - b)

  for (const query of queries) {
    let temp = 0
    let count = 0

    for (const num of nums) {
      if (temp + num > query) break
      temp += num
      count += 1
    }

    answer.push(count)
  }

  return answer
}
