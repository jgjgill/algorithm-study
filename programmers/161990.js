// https://school.programmers.co.kr/learn/courses/30/lessons/161990

function solution(wallpaper) {
  const x_length = wallpaper.length
  const y_length = wallpaper[0].length

  let min_x = Infinity
  let min_y = Infinity
  let max_x = -Infinity
  let max_y = -Infinity

  for (let i = 0; i < x_length; i++) {
    for (let t = 0; t < y_length; t++) {
      if (wallpaper[i][t] === "#") {
        min_x = Math.min(min_x, i)
        min_y = Math.min(min_y, t)
        max_x = Math.max(min_x, i)
        max_y = Math.max(max_y, t)
      }
    }
  }

  return [min_x, min_y, max_x + 1, max_y + 1]
}
