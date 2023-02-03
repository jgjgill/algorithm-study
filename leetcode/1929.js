// https://leetcode.com/problems/concatenation-of-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  const answer = []

  for (let i = 0; i < 2; i++) {
    for (const num of nums) {
      answer.push(num)
    }
  }

  return answer
}
