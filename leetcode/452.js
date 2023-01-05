// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  let check = -Infinity
  let answer = 0

  points.sort((a, b) => a[1] - b[1])

  for (const [start, end] of points) {
    if (start <= check) continue

    check = end
    answer += 1
  }

  return answer
}
