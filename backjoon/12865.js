// https://www.acmicpc.net/problem/12865

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

function createExample(input) {
  const [N, K] = input[0].split(' ').map(Number)
  const example = []

  for (let i = 1; i <= N; i++) {
    const [W, V] = input[i].split(' ').map(Number)
    example.push({ W, V })
  }

  return [example, N, K]
}

function dp(example, N, K) {
  const sum = []

  for (let i = 0; i <= N; i++) {
    sum.push(new Array(K + 1).fill(0))
  }

  for (let i = 1; i <= N; i++) {
    const { W, V } = example[i - 1]
    for (let k = 1; k <= K; k++) {
      if (k < W) {
        sum[i][k] = sum[i - 1][k]
      } else {
        sum[i][k] = Math.max(sum[i - 1][k], sum[i - 1][k - W] + V)
      }
    }
  }

  return sum[N][K]
}

function solution(input) {
  const [example, N, K] = createExample(input)
  const answer = dp(example, N, K)

  return answer
}

console.log(solution(input))
