// https://www.acmicpc.net/problem/15829

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const L = Number(input[0])
  const M = 1234567891
  let r = 1
  let sum = 0
  const check = input[1].split("")

  for (let i = 0; i < L; i++) {
    sum += (check[i].charCodeAt() - 96) * r
    r *= 31
    r %= M
    sum %= M
  }

  return sum
}

console.log(solution())
