// https://www.acmicpc.net/problem/7795

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const T = Number(input[0])
  const answer = []

  for (let i = 0; i < T; i++) {
    const [N, M] = input[3 * i + 1].split(" ").map(Number)
    const A = input[3 * i + 2].split(" ").map(Number)
    const B = input[3 * i + 3].split(" ").map(Number)

    const check = binarySearch(N, M, A, B)

    answer.push(check)
  }

  return answer.join("\n")

  function binarySearch(n, m, a, b) {
    const sorted_b = b.sort((a, b) => a - b)
    let sum = 0

    for (const value of a) {
      let left = 0
      let right = m - 1
      let mid
      let temp
      while (left <= right) {
        mid = Math.floor((left + right) / 2)
        if (sorted_b[mid] < value) {
          left = mid + 1
          temp = mid + 1
        } else {
          right = mid - 1
          temp = mid
        }
      }

      sum += temp
    }

    return sum
  }
}

console.log(solution())
