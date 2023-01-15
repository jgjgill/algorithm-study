// https://leetcode.com/problems/maximum-number-of-coins-you-can-get/

/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
  let answer = 0

  piles.sort((a, b) => b - a)

  for (let i = 0; i < piles.length / 3; i++) {
    answer += piles[2 * i + 1]
  }

  return answer
}
