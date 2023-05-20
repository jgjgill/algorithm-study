// https://www.acmicpc.net/problem/2480

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const dices = input[0].split(" ").map(Number)
  const check = {}

  for (const dice of dices) {
    if (!(dice in check)) check[dice] = 1
    else check[dice] += 1
  }

  const keys = Object.keys(check)

  if (keys.length === 1) return 10000 + dices[0] * 1000

  if (keys.length === 2) {
    for (const key of keys) {
      if (check[key] === 2) return 1000 + key * 100
    }
  }

  return Math.max(...dices) * 100
}

console.log(solution())
