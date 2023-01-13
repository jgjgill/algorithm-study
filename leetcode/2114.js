// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let max = 1

  sentences.forEach((sentence) => {
    max = Math.max(max, sentence.split(' ').length)
  })

  return max
}
