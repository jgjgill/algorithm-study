// https://www.acmicpc.net/problem/14888

const fs = require('fs')
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .split('\n')

const N = Number(input[0])
const numbers = input[1].split(' ').map(Number)
const operators = input[2].split(' ').map(Number)

const answer = []

function calc(index, a, b) {
  switch (index) {
    case 0:
      return a + b
    case 1:
      return a - b
    case 2:
      return a * b
    case 3:
      return (a / b) >> 0
  }
}

function bt(number, count) {
  if (count === N) return answer.push(number)

  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === 0) continue

    operators[i]--
    bt(calc(i, number, numbers[count]), count + 1)
    operators[i]++
  }
}

function solution() {
  bt(numbers[0], 1)

  console.log(Math.max(...answer))
  console.log(Math.min(...answer))
}

solution(input)
