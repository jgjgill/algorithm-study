// https://leetcode.com/problems/verifying-an-alien-dictionary/

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  for (let i = 0; i < words.length - 1; i++) {
    const first = words[i]
    const last = words[i + 1]
    const maxLength = Math.max(first.length, last.length)

    for (let t = 0; t < maxLength; t++) {
      const firstIndexOf = order.indexOf(first[t])
      const lastIndexOf = order.indexOf(last[t])

      if (firstIndexOf > lastIndexOf) return false
      if (firstIndexOf < lastIndexOf) break
    }
  }
  
  return true
};