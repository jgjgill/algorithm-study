// https://www.acmicpc.net/problem/1253

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const N = Number(input[0])
  const list = input[1].split(" ").map(Number)
  let answer = 0

  list.sort((a, b) => a - b)

  for (let i = 0; i < N; i++) {
    let left = 0
    let right = N - 1

    while (left < right) {
      if (left === i) left += 1
      else if (right === i) right -= 1
      else {
        const sum = list[left] + list[right]

        if (sum < list[i]) left += 1
        else if (sum > list[i]) right -= 1
        else {
          answer += 1
          break
        }
      }
    }
  }

  return answer
}

console.log(solution())
