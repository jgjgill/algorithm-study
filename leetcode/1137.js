// https://leetcode.com/problems/n-th-tribonacci-number/

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  return dp(n)

  function dp(n) {
    const dp = [0, 1, 1]

    for (let i = 3; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
    }

    return dp[n]
  }
}