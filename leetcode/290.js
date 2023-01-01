// https://leetcode.com/problems/word-pattern/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const pCheck = {}
  const sCheck = {}
  s = s.split(' ')
  if (pattern.length !== s.length) return false

  for (let i = 0; i < s.length; i++) {
    if (pCheck[pattern[i]] === undefined) pCheck[pattern[i]] = s[i]
    if (sCheck[s[i]] === undefined) sCheck[s[i]] = pattern[i]
    if (pCheck[pattern[i]] !== s[i] || sCheck[s[i]] !== pattern[i]) return false
  }

  return true
};