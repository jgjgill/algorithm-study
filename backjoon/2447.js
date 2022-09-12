// https://www.acmicpc.net/problem/2447

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString()
let answer = ''

function recursion(row, column, number) {
  if (row % 3 === 1 && column % 3 === 1) {
    answer += ' '
  } else {
    if (number === 1) {
      answer += '*'
    } else {
      recursion((row / 3) >> 0, (column / 3) >> 0, number / 3)
    }
  }
}

function solution(input) {
  input = Number(input)

  for (let i = 0; i < input; i++) {
    for (let t = 0; t < input; t++) {
      recursion(i, t, input)
    }

    answer += '\n'
  }

  return answer
}

console.log(solution(input))