// https://leetcode.com/problems/add-to-array-form-of-integer/

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  const numLength = num.length
  const answer = []

  let checkNum = numLength - 1
  let carry = 0

  while (checkNum >= 0 || k > 0) {
    const check = (checkNum < 0 ? 0 : num[checkNum]) + (k % 10) + carry
    carry = check > 9 ? 1 : 0
    k = Math.floor(k / 10)
    checkNum -= 1

    answer.push(check % 10)
  }

  if (carry === 1) answer.push(carry)

  return answer.reverse()
}
