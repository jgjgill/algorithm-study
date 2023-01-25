// https://leetcode.com/problems/time-needed-to-buy-tickets/

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
  let answer = 0
  let index = 0

  while(tickets[k] !== 0) {
    if (index === tickets.length) index = 0
    if (tickets[index] !== 0) {
      answer += 1
      tickets[index] -= 1
    }
    
    index += 1
  }

  return answer
};