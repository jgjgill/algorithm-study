// https://www.acmicpc.net/problem/9465

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const input = fs.readFileSync(filePath).toString().split('\n')
const T = Number(input[0])

function dp(N, sticker) {
  const dp = new Array(N + 1).fill().map(() => [])

  dp[1][0] = sticker[1][0]
  dp[1][1] = sticker[1][1]
  dp[1][2] = 0

  for (let i = 2; i <= N; i++) {
    dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][2]) + sticker[i][0]
    dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][2]) + sticker[i][1]
    dp[i][2] = Math.max(...dp[i - 1])
  }

  return Math.max(...dp[N])
}

function solution(input) {
  let count = 0
  for (let i = 1; i <= T; i++) {
    const N = Number(input[count + i])
    const ups = input[count + i + 1].split(' ').map(Number)
    const downs = input[count + i + 2].split(' ').map(Number)
    const sticker = new Array(N + 1).fill().map(() => [])

    for (let i = 1; i <= N; i++) {
      sticker[i][0] = ups[i - 1]
      sticker[i][1] = downs[i - 1]
    }

    const answer = dp(N, sticker)

    console.log(answer)
    count += 2
  }
}

solution(input)
