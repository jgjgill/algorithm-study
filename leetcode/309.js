// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  return dp()

  function dp() {
    if (prices.length === 1) return 0

    const dp = Array.from({ length: prices.length }, () => Array(2))

    dp[0][0] = -prices[0]
    dp[0][1] = 0
    dp[1][0] = Math.max(-prices[0], -prices[1])
    dp[1][1] = Math.max(0, prices[1] - prices[0])

    for (let i = 2; i < prices.length; i++) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 2][1] - prices[i])
      dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
    }

    return dp[prices.length - 1][1]
  }
}
