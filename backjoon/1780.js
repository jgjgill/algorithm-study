// https://www.acmicpc.net/problem/1780

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const N = Number(input[0])
  const board = []
  const answer = [0, 0, 0]

  for (let i = 1; i <= N; i++) {
    board[i - 1] = input[i].split(" ").map(Number)
  }

  recur(0, 0, N)
  return answer.join('\n')

  function recur(x, y, size) {
    let check = true
    const target = board[x][y]

    for (let i = x; i < x + size; i++) {
      for (let t = y; t < y + size; t++) {
        if (board[i][t] !== target) {
          check = false
          break
        }
      }
      if (!check) break
    }

    if (check) {
      answer[target + 1] += 1
    } else {
      recur(x, y, size / 3)

      recur(x + size / 3, y, size / 3)
      recur(x, y + size / 3, size / 3)

      recur(x + size / 3, y + (size / 3) * 2, size / 3)
      recur(x + (size / 3) * 2, y + size / 3, size / 3)

      recur(x + (size / 3) * 2, y, size / 3)
      recur(x, y + (size / 3) * 2, size / 3)

      recur(x + size / 3, y + size / 3, size / 3)
      recur(x + (size / 3) * 2, y + (size / 3) * 2, size / 3)
    }
  }
}

console.log(solution())
