// https://www.acmicpc.net/problem/5430

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  let index = 0
  const T = Number(input[index++])
  const answer = []

  outer: for (let i = 0; i < T; i++) {
    const p = input[index++].trim().split("")
    const n = Number(input[index++])
    const array = JSON.parse(input[index++])
    let reverse_check = false

    for (const p_word of p) {
      if (array.length === 0 && p_word === "D") {
        answer.push("error")
        continue outer
      }
      if (p_word === "R") {
        reverse_check = !reverse_check
      }
      if (p_word === "D") {
        reverse_check ? array.pop() : array.shift()
      }
    }

    answer.push(JSON.stringify(reverse_check ? array.reverse() : array))
  }

  return answer.join("\n")
}

console.log(solution())
