const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const N = Number(input[0])
  const A = input[1].split(" ").map((item, index) => [Number(item), index])
  const B = A.sort((a, b) => a[0] - b[0])
  const answer = []

  B.forEach((item, index) => {
    answer[item[1]] = index
  })

  return answer.join(" ")
}

console.log(solution())
