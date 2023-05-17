// https://www.acmicpc.net/problem/2161

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const N = Number(input[0])
  const check = Array.from({ length: N }, (_, i) => i + 1)
  const answer = []
  check.reverse()

  while (check.length !== 1) {
    answer.push(check.pop())
    check.unshift(check.pop())
  }

  answer.push(check.pop())

  return answer.join(" ")
}

console.log(solution())
