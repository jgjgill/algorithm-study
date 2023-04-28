// https://school.programmers.co.kr/learn/courses/30/lessons/77485

function solution(rows, columns, queries) {
  const board = Array.from({ length: rows + 1 }, () => [])
  const answer = []
  let count = 1
  for (let i = 1; i <= rows; i++) {
    for (let t = 1; t <= columns; t++) {
      board[i][t] = count++
    }
  }

  for (const query of queries) {
    answer.push(changeBoard(...query))
  }

  return answer

  function changeBoard(min_x, min_y, max_x, max_y) {
    let now_x = min_x
    let now_y = min_y
    let min = board[now_x][now_y]
    let now = board[now_x][now_y]

    while (now_y + 1 <= max_y) {
      ;[now, board[now_x][now_y + 1]] = [board[now_x][now_y + 1], now]
      now_y += 1
      min = Math.min(min, now)
    }
    while (now_x + 1 <= max_x) {
      ;[now, board[now_x + 1][now_y]] = [board[now_x + 1][now_y], now]
      now_x += 1
      min = Math.min(min, now)
    }
    while (now_y - 1 >= min_y) {
      ;[now, board[now_x][now_y - 1]] = [board[now_x][now_y - 1], now]
      now_y -= 1
      min = Math.min(min, now)
    }
    while (now_x - 1 >= min_x) {
      ;[now, board[now_x - 1][now_y]] = [board[now_x - 1][now_y], now]
      now_x -= 1
      min = Math.min(min, now)
    }

    return min
  }
}
