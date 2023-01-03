// https://leetcode.com/problems/delete-columns-to-make-sorted/

/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let answer = 0

  for (let i = 0; i < strs[0].length; i++) {
    for (let t = 0; t < strs.length - 1; t++) {
      if (strs[t][i] > strs[t + 1][i]) {
        answer += 1
        break
      }
    }
  }

  return answer
}
