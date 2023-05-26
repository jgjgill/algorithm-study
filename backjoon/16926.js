// https://www.acmicpc.net/problem/16926

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const [N, M, R] = input[0].split(" ").map(Number)
  const array = []
  let min = Math.min(N, M) / 2

  for (let i = 1; i <= N; i++) {
    const temp = input[i].split(" ").map(Number)
    array.push(temp)
  }

  for (let i = 0; i < R; i++) {
    for (let count = 0; count < min; count++) {
      const row = N - count - 1
      const col = M - count - 1
      const temp = array[count][count]

      for (let i = count; i < col; i++) {
        array[count][i] = array[count][i + 1]
      }

      for (let i = count; i < row; i++) {
        array[i][col] = array[i + 1][col]
      }

      for (let i = col; i > count; i--) {
        array[row][i] = array[row][i - 1]
      }

      for (let i = row; i > count; i--) {
        array[i][count] = array[i - 1][count]
      }

      array[count + 1][count] = temp
    }
  }

  return array.map((item) => item.join(" ")).join("\n")
}

console.log(solution())
