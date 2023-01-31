// https://leetcode.com/problems/best-team-with-no-conflicts/

/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function (scores, ages) {
  const length = scores.length
  const check = scores.map((score, index) => [score, ages[index]])
  check.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1]
    return a[0] - b[0]
  })

  const dp = new Array(length).fill(0)

  for (let i = 0; i < length; i++) {
    for (let t = 0; t < length; t++) {
      if (check[t][0] <= check[i][0]) dp[i] = Math.max(dp[i], dp[t])
    }

    dp[i] += check[i][0]
  }

  return Math.max(...dp)
}
