// https://www.acmicpc.net/problem/16472

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const N = Number(input[0])
  const list = input[1].split("")
  const check = {}

  let left = 0
  let answer = 0
  let kind = 0

  for (let right = 0; right < list.length; right++) {
    if (check[list[right]] === undefined || check[list[right]] === 0) {
      check[list[right]] = 1
      kind += 1
    } else check[list[right]] += 1

    while (kind > N) {
      check[list[left]] -= 1

      if (check[list[left]] === 0) {
        kind -= 1
      }

      left += 1
    }

    answer = Math.max(answer, right - left + 1)
  }

  return answer
}

console.log(solution())
