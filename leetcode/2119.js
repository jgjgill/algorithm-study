// https://leetcode.com/problems/a-number-after-a-double-reversal/

/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
  const temp = String(num).split('')
  const temp2 = Number(temp.reverse().join(''))
  const temp3 = String(temp2).split('').reverse().join('')

  return num === Number(temp3)
};