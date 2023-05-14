// https://www.acmicpc.net/problem/1158

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const [N, K] = input[0].split(" ").map(Number)
  const array = Array.from({ length: N }, (_, i) => i + 1)
  const answer = []
  let index = 0

  while (array.length !== 0) {
    index = (index + K - 1) % array.length
    answer.push(array.splice(index, 1))
  }

  return "<" + answer.join(", ") + ">"
}

console.log(solution())
