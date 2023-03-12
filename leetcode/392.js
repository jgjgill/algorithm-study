// https://leetcode.com/problems/is-subsequence/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let left = 0
  let right = 0

  if (s.length > t.length) return false

  while (left <= s.length || right <= t.length) {
    if (s[left] === t[right]) left += 1
    right += 1

    if (right === t.length && left !== s.length) return false
  }
  
  return true
};