// https://www.acmicpc.net/problem/16234

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const [N, L, R] = input[0].split(" ").map(Number)
  const board = Array.from({ length: N }, () => [])
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  let answer = 0
  let condi

  for (let i = 1; i <= N; i++) {
    board[i - 1] = input[i].split(" ").map(Number)
  }

  while (true) {
    condi = false
    const check = Array.from({ length: N }, () => new Array(N).fill(false))

    for (let x = 0; x < N; x++) {
      for (let y = 0; y < N; y++) {
        if (check[x][y]) continue

        dfs(x, y, check)
      }
    }

    if (!condi) return answer

    answer += 1
  }

  function dfs(x, y, check) {
    const stack = [[x, y]]
    const changes = [[x, y]]
    let sum = board[x][y]

    check[x][y] = true

    while (stack.length !== 0) {
      const current = stack.pop()

      for (const dir of dirs) {
        const dx = dir[0] + current[0]
        const dy = dir[1] + current[1]

        if (dx < 0 || dy < 0) continue
        if (dx >= N || dy >= N) continue
        if (check[dx][dy]) continue

        const temp = Math.abs(board[current[0]][current[1]] - board[dx][dy])

        if (temp >= L && temp <= R) {
          sum += board[dx][dy]
          changes.push([dx, dy])
          stack.push([dx, dy])
          check[dx][dy] = true
          condi = true
        }
      }
    }

    changes.forEach(([x, y]) => {
      board[x][y] = Math.floor(sum / changes.length)
    })
  }
}

console.log(solution())
