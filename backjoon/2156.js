// /dev/stdin
// example.txt

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

function createExample(input) {
  const N = Number(input[0])
  const temp = []

  for (let i = 1; i <= N; i++) {
    temp.push(Number(input[i]))
  }

  return temp
}

function createAnswer(example) {
  const answer = []

  answer[0] = example[0]
  answer[1] = example[0] + example[1]
  answer[2] = Math.max(
    answer[1],
    example[0] + example[2],
    example[1] + example[2]
  )

  for (i = 3; i < example.length; i++) {
    answer[i] = Math.max(
      answer[i - 1],
      answer[i - 3] + example[i - 1] + example[i],
      answer[i - 2] + example[i]
    )
  }

  return answer[example.length - 1]
}

function solution(input) {
  const example = createExample(input)
  const answer = createAnswer(example)

  return answer
}

console.log(solution(input))
