// https://leetcode.com/problems/reverse-only-letters/

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const reg = /[a-zA-Z]/
  const check = s.split("")
  let left = 0
  let right = s.length - 1

  while (left < right) {
    if (!reg.test(s[left])) left += 1
    if (!reg.test(s[right])) right -= 1
    if (reg.test(s[left]) && reg.test(s[right])) {
      ;[check[left], check[right]] = [check[right], check[left]]
      left += 1
      right -= 1
    }
  }

  return check.join("")
}
