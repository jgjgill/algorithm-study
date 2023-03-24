// https://www.acmicpc.net/problem/11652

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const N = Number(input[0])
  const cards = []
  

  for (let i = 1; i <= N; i++) {
    cards.push(BigInt(input[i]))
  }

  cards.sort((a, b) => a < b ? -1 : a > b ? 1 : 0)

  let current_count = 1
  let mode_count = 1
  let mode = cards[0]

  for (let i = 1; i < N; i++) {
    if (cards[i - 1] === cards[i]) {
      current_count += 1
    } else {
      current_count = 1
    }

    if (current_count > mode_count) {
      mode_count = current_count
      mode = cards[i]
    }
  }

  return String(mode)
}

console.log(solution())
