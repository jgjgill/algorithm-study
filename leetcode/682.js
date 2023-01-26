// https://leetcode.com/problems/baseball-game/

/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
  const check = []

  for (const operation of operations) {
    if (operation === '+') check.push(check.at(-1) + check.at(-2))
    else if (operation === 'D') check.push(check.at(-1) * 2)
    else if (operation === 'C') check.pop()    
    else check.push(Number(operation))
  }
  
  if (check.length === 0) return 0
  return check.reduce((acc, cur) => acc + cur)
};