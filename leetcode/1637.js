// https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  let answer = 0
  const check = points.map((point) => point[0])
  check.sort((a, b) => a - b)

  for (let i = 0; i < check.length - 1; i++) {
    if (check[i + 1] - check[i] <= answer) continue

    answer = check[i + 1] - check[i]
  }

  return answer
}
