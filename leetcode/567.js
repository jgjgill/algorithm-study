// https://leetcode.com/problems/permutation-in-string/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const s1Length = s1.length
  const s2Length = s2.length
  const check = Array.from({ length: 26 }, () => 0)

  for (let i = 0; i < s1Length; i++) {
    check[s1.charCodeAt(i) - "a".charCodeAt(0)] += 1
    check[s2.charCodeAt(i) - "a".charCodeAt(0)] -= 1
  }

  if (allCheck()) return true

  for (let i = s1Length; i < s2Length; i++) {
    check[s2.charCodeAt(i) - "a".charCodeAt(0)] -= 1
    check[s2.charCodeAt(i - s1Length) - "a".charCodeAt(0)] += 1
    if (allCheck()) return true
  }

  return false

  function allCheck() {
    for (let i = 0; i < check.length; i++) {
      if (check[i] !== 0) return false
    }

    return true
  }
}
