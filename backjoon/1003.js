// https://www.acmicpc.net/problem/1003

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const T = Number(input[0])
  const zero_check = [1, 0]
  const one_check = [0, 1]
  const answer = []

  for (let i = 2; i <= 40; i++) {
    zero_check[i] = zero_check[i - 2] + zero_check[i - 1]
    one_check[i] = one_check[i - 2] + one_check[i - 1]
  }

  for (let i = 1; i <= T; i++) {
    const number = Number(input[i])
    answer.push(`${zero_check[number]} ${one_check[number]}`)
  }

  return answer.join("\n")
}

console.log(solution())
