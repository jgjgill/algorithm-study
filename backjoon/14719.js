// https://www.acmicpc.net/short/status/14719

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const [H, W] = input[0].split(" ").map(Number)
  const blocks = input[1].split(" ").map(Number)
  const board = Array.from({ length: H }, () => [])
  let count = 0

  for (let i = 0; i < H; i++) {
    for (let t = 0; t < W; t++) {
      board[i][t] = 0
    }
  }

  blocks.forEach((block, index) => {
    for (let i = 1; i <= block; i++) {
      board[H - i][index] = 1
    }
  })

  for (let i = 0; i < H; i++) {
    for (let t = 0; t < W; t++) {
      if (board[i][t] === 1) continue
      if (checkSide(i, t)) {
        count += 1
        board[i][t] = 2
      } else board[i][t] = -1
    }
  }

  return count

  function checkSide(x, y) {
    let left = false
    let right = false

    for (let i = y - 1; i >= 0; i--) {
      if (board[x][i] === 1 || board[x][i] === 2) {
        left = true
        break
      }
      if (board[x][i] === -1) return false
    }

    for (let i = y + 1; i < W; i++) {
      if (board[x][i] === 1 || board[x][i] === 2) {
        right = true
        break
      }
      if (board[x][i] === -1) return false
    }

    if (left && right) return true
    return false
  }
}

console.log(solution())

function solution() {
  const [H, W] = input[0].split(" ").map(Number)
  const board = input[1].split(" ").map(Number)
  let count = 0

  for (let i = 0; i < W; i++) {
    let left = -1
    let right = -1

    for (let t = i; t >= 0; t--) {
      left = Math.max(left, board[t])
    }

    for (let t = i; t < W; t++) {
      right = Math.max(right, board[t])
    }

    const temp = Math.min(left, right) - board[i]
    count += temp
  }

  return count
}

console.log(solution())
