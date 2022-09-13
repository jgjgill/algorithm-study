// https://www.acmicpc.net/problem/1011

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

function createExample(input) {
  const [x, y] = input.split(' ').map(Number)

  return { x, y }
}

function createAnswer(example) {
  const length = example.y - example.x
  const max = Math.sqrt(length) >> 0

  let answer

  if (max === Math.sqrt(length)) {
    answer = 2 * max - 1
  } else {
    if (length <= max * max + max) {
      answer = max * 2
    } else {
      answer = max * 2 + 1
    }
  }

  return answer
}

function solution(input) {
  const answers = []
  const T = Number(input[0])

  for (let i = 1; i <= T; i++) {
    const example = createExample(input[i])
    const answer = createAnswer(example)
    answers.push(answer)
  }

  return answers.join('\n')
}

console.log(solution(input))

// length -> count --- rule
// 1      -> 1     --- 1

// 2      -> 2     --- 1 1

// 3      -> 3     --- 1 1 1
// 4      -> 3     --- 1 2 1

// 5      -> 4     --- 1 2 1 1
// 6      -> 4     --- 1 2 2 1

// 7      -> 5     --- 1 2 2 1 1
// 8      -> 5     --- 1 2 2 2 1
// 9      -> 5     --- 1 2 3 2 1

// 10     -> 6     --- 1 2 3 2 1 1
// 11     -> 6     --- 1 2 3 2 2 1
// 12     -> 6     --- 1 2 3 3 2 1

// 13     -> 7     --- 1 2 3 3 2 1 1
// 14     -> 7     --- 1 2 3 3 2 2 1
// 15     -> 7     --- 1 2 3 3 3 2 1
// 16     -> 7     --- 1 2 3 4 3 2 1