// https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const check = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
  s = s.split('')
  let answer = 0
  let prev

  s.forEach((item) => {
    answer += check[item]
    if ((item === 'V' || item === 'X') && prev === 'I') answer -= 2
    if ((item === 'L' || item === 'C') && prev === 'X') answer -= 20
    if ((item === 'D' || item === 'M') && prev === 'C') answer -= 200
    prev = item
  })

  return answer
}
