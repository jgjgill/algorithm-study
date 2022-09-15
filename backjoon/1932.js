// https://www.acmicpc.net/problem/1932

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

function createExample(input, N) {
  const example = [null]

  for (let i = 1; i <= N; i++) {
    const numbers = input[i].split(' ').map(Number)
    example.push(numbers)
  }

  return example
}

function dp(example, N) {
  const dp = new Array(N + 1).fill().map(() => [])
  dp[1][0] = example[1][0]

  for (let i = 2; i <= N; i++) {
    for (let t = 0; t < i; t++) {
      const left = dp[i - 1][t - 1] ?? 0
      const right = dp[i - 1][t] ?? 0

      dp[i][t] = Math.max(example[i][t] + left, example[i][t] + right)
    }
  }

  return Math.max(...dp[N])
}

function solution(input) {
  const N = Number(input[0])

  const example = createExample(input, N)
  const answer = dp(example, N)

  return answer
}

console.log(solution(input))
