// https://www.acmicpc.net/problem/2579

const fs = require('fs')
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .split('\n')

const N = Number(input[0])

function dp(stairs) {
  const dp = [0]

  dp[1] = stairs[1]
  dp[2] = stairs[1] + stairs[2]

  for (let i = 3; i <= N; i++) {
    dp[i] = Math.max(
      stairs[i] + stairs[i - 1] + dp[i - 3],
      stairs[i] + dp[i - 2]
    )
  }

  return dp[N]
}

function solution(input) {
  const stairs = [null]

  for (let i = 1; i <= N; i++) {
    const stair = Number(input[i])

    stairs.push(stair)
  }

  const answer = dp(stairs)
  return answer
}

console.log(solution(input))
