// https://www.acmicpc.net/problem/1806

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const [N, S] = input[0].split(" ").map(Number)
  const list = input[1].split(" ").map(Number)

  let right = 0
  let sum = 0
  let answer = N + 1

  for (let left = 0; left < N; left++) {
    if (left !== 0) sum -= list[left - 1]

    while (right < N && sum < S) {
      sum += list[right]
      right += 1
    }

    if (sum >= S) answer = Math.min(answer, right - left)
  }

  if (answer === N + 1) return 0
  return answer
}

console.log(solution())
