// https://leetcode.com/problems/daily-temperatures/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const answer = Array.from({ length: temperatures.length }, () => 0)
  const stack = []

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack.at(-1)]) {
      const prev = stack.pop()
      answer[prev] = i - prev
    }
    stack.push(i)
  }

  return answer
}

var dailyTemperatures = function (temperatures) {
  const answer = []

  outer: for (let i = 0; i < temperatures.length; i++) {
    for (let t = i + 1; t < temperatures.length; t++) {
      if (temperatures[i] < temperatures[t]) {
        answer.push(t - i)
        continue outer
      }
    }
    answer.push(0)
  }

  return answer
}
