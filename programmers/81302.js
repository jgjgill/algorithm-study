// https://school.programmers.co.kr/learn/courses/30/lessons/81302

function solution(places) {
  const answer = []
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]
  for (let i = 0; i < 5; i++) {
    const temp = []
    let check = 1

    for (let t = 0; t < 5; t++) {
      places[i][t] = places[i][t].split("")
      for (let q = 0; q < 5; q++) {
        if (places[i][t][q] === "P") {
          temp.push([t, q])
        }
      }
    }

    for (const cur of temp) {
      const result = bfs(cur[0], cur[1], places[i])
      if (result) {
        check = 0
        break
      }
    }
    answer.push(check)
  }

  function bfs(x, y, board) {
    const stack = [[x, y]]
    board[x][y] = 0
    let index = 0

    while (index < stack.length) {
      const [cur_x, cur_y] = stack[index]
      index += 1

      for (const dir of dirs) {
        const injectX = dir[0] + cur_x
        const injectY = dir[1] + cur_y

        if (injectX < 0 || injectY < 0) continue
        if (injectX >= 5 || injectY >= 5) continue
        if (board[injectX][injectY] === "X") continue
        if (board[injectX][injectY] === "P" && board[cur_x][cur_y] + 1 <= 2)
          return true

        if (board[injectX][injectY] === "O") {
          board[injectX][injectY] = board[cur_x][cur_y] + 1
          stack.push([injectX, injectY])
        }
      }
    }

    return false
  }

  return answer
}
