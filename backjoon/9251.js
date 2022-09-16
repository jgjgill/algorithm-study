// https://www.acmicpc.net/problem/9251

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

function dp(first, second) {
  const dp = new Array(first.length + 1)
    .fill()
    .map(() => new Array(second.length + 1).fill(0))

  for (let i = 1; i <= first.length; i++) {
    for (let t = 1; t <= second.length; t++) {
      if (first[i - 1] === second[t - 1]) {
        dp[i][t] = dp[i - 1][t - 1] + 1
      } else {
        dp[i][t] = Math.max(dp[i - 1][t], dp[i][t - 1])
      }
    }
  }

  return dp[first.length][second.length]
}

function solution(input) {
  const first = input[0]
  const second = input[1]

  const answer = dp(first, second)

  return answer
}

console.log(solution(input))
