// https://leetcode.com/problems/add-binary/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let aLength = a.length
  let bLength = b.length
  let answer = ""
  let carry = 0

  while (aLength !== 0 || bLength !== 0) {
    let sum =
      (aLength > 0 ? +a[--aLength] : 0) +
      (bLength > 0 ? +b[--bLength] : 0) +
      carry
    answer = (sum % 2) + answer
    carry = sum > 1 ? 1 : 0
  }

  return carry === 1 ? carry + answer : answer
}
