// https://www.acmicpc.net/problem/7569

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const [M, N, H] = input[0].split(" ").map(Number)
  const board = createBoard()
  const directions = [
    [1, 0, 0],
    [-1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1],
  ]
  const queue = []
  let index = 0
  let left = 0
  let answer = -1

  for (let i = 0; i < H; i++) {
    for (let t = 0; t < N; t++) {
      for (let q = 0; q < M; q++) {
        if (board[i][t][q] === 1) queue.push([i, t, q, 0])
        if (board[i][t][q] === 0) left += 1
      }
    }
  }

  if (left === 0) answer = 0

  outer: while (index < queue.length) {
    const [i, t, q, count] = queue[index]
    index += 1

    for (const [z, y, x] of directions) {
      const injectZ = i + z
      const injectY = t + y
      const injectX = q + x

      if (injectX < 0 || injectY < 0 || injectZ < 0) continue
      if (injectX >= M || injectY >= N || injectZ >= H) continue
      if (board[injectZ][injectY][injectX] === 0) {
        board[injectZ][injectY][injectX] = 1
        left -= 1

        if (left === 0) {
          answer = count + 1
          break outer
        }

        queue.push([injectZ, injectY, injectX, count + 1])
      }
    }
  }

  console.log(answer)

  function createBoard() {
    const board = Array.from(Array(H), () =>
      Array.from(Array(N), () => Array(M).fill(0))
    )

    for (let i = 0; i < H; i++) {
      for (let t = 0; t < N; t++) {
        const temp = input[i * N + t + 1].split(" ").map(Number)
        for (let q = 0; q < M; q++) {
          board[i][t][q] = temp[q]
        }
      }
    }
    return board
  }
}

solution()
