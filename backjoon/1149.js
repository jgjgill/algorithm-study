// https://www.acmicpc.net/problem/1149

const fs = require('fs')
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .split('\n')

const N = Number(input[0])

function dp(houses) {
  const dp = new Array(N + 1).fill().map(() => [])

  dp[1][1] = houses[1][1]
  dp[1][2] = houses[1][2]
  dp[1][3] = houses[1][3]

  for (let i = 2; i < dp.length; i++) {
    dp[i][1] = Math.min(
      dp[i - 1][2] + houses[i][1],
      dp[i - 1][3] + houses[i][1]
    )
    dp[i][2] = Math.min(
      dp[i - 1][1] + houses[i][2],
      dp[i - 1][3] + houses[i][2]
    )
    dp[i][3] = Math.min(
      dp[i - 1][1] + houses[i][3],
      dp[i - 1][2] + houses[i][3]
    )
  }

  return Math.min(...dp[N].slice(1))
}

function solution(input) {
  const houses = [null]

  for (let i = 1; i <= N; i++) {
    const [r, g, b] = input[i].split(' ').map(Number)

    houses.push([null, r, g, b])
  }

  const answer = dp(houses)

  return answer
}

console.log(solution(input))
