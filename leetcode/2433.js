// https://leetcode.com/problems/find-the-original-array-of-prefix-xor/

/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
  const answer = []
  let temp = 0

  for (let i = 0; i < pref.length; i++) {
    answer.push(temp ^ pref[i])
    temp = pref[i]
  }

  return answer
}
