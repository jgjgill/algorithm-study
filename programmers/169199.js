// https://school.programmers.co.kr/learn/courses/30/lessons/169199

function solution(board) {
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]
  const x_length = board.length
  const y_length = board[0].length
  let startX
  let startY
  let answer = -1

  for (let i = 0; i < x_length; i++) {
    board[i] = board[i].split("")
    for (let t = 0; t < y_length; t++) {
      if (board[i][t] === "R") {
        startX = i
        startY = t
      }
    }
  }

  bfs(startX, startY)

  function bfs(x, y) {
    const stack = [[x, y]]
    let index = 0
    board[x][y] = 0

    while (index < stack.length) {
      const [curX, curY] = stack[index]
      index += 1

      for (const dir of dirs) {
        let injectX = curX + dir[0]
        let injectY = curY + dir[1]

        while (true) {
          if (injectX >= x_length || injectY >= y_length) break
          if (injectX < 0 || injectY < 0) break
          if (board[injectX][injectY] === "D") break
          injectX += dir[0]
          injectY += dir[1]
        }

        injectX -= dir[0]
        injectY -= dir[1]

        if (board[injectX][injectY] === "G") {
          answer = board[curX][curY] + 1
          return
        }
        if (board[injectX][injectY] !== ".") continue

        board[injectX][injectY] = board[curX][curY] + 1
        stack.push([injectX, injectY])
      }
    }
  }

  return answer
}
