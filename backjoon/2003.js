// https://www.acmicpc.net/problem/2003

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const [N, M] = input[0].split(" ").map(Number)
  const list = input[1].split(" ").map(Number)
  let left = 0
  let sum = 0
  let answer = 0

  for (let right = 0; right < N; right++) {
    sum += list[right]

    while (sum >= M) {
      if (sum === M) answer += 1
      sum -= list[left]
      left += 1
    }
  }

  return answer
}

console.log(solution())
