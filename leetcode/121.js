// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = prices[0]
  let profit = 0

  prices.forEach((price) => {
    min = Math.min(price, min)
    profit = Math.max(profit, price - min)
  })

  return profit
};