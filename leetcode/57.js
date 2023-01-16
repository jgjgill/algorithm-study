// https://leetcode.com/problems/insert-interval/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const answer = []

  if (intervals.length === 0) return [newInterval]

  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) {
      answer.push(newInterval, ...intervals.slice(i))
      return answer
    }

    if (newInterval[0] > intervals[i][1]) {
      answer.push(intervals[i])
      continue
    }

    newInterval = [
      Math.min(intervals[i][0], newInterval[0]),
      Math.max(intervals[i][1], newInterval[1]),
    ]
  }

  answer.push(newInterval)

  return answer
}
