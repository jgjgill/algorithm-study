// https://www.acmicpc.net/problem/15649

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString()
const [N, M] = input.split(' ').map(Number)
const checks = new Array(N + 1).fill(0)
const answer = []

function bt(current) {
  if (current > M) {
    console.log(...answer.slice(1))
    return
  }

  for (let i = 1; i <= N; i++) {
    if (checks[i]) continue

    answer[current] = i

    checks[i] = 1
    bt(current + 1)
    checks[i] = 0
  }
}

function solution() {
  bt(1)
}

solution()