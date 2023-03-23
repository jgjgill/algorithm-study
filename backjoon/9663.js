// https://www.acmicpc.net/problem/9663

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

function createTable(N) {
  const table = new Array(N + 1).fill().map(() => new Array(N + 1).fill(0))

  return table
}

let answer = 0

function bt(table, N, queen) {
  if (queen > N) return answer++

  for (let i = 1; i <= N; i++) {
    if (table[queen][i] !== 0) continue

    for (let t = 1; t <= N; t++) {
      if (queen + t <= N) table[queen + t][i]++
      if (queen + t <= N && i + t <= N) table[queen + t][i + t]++
      if (queen + t <= N && i - t >= 1) table[queen + t][i - t]++
    }

    bt(table, N, queen + 1)

    for (let t = 1; t <= N; t++) {
      if (queen + t <= N) table[queen + t][i]--
      if (queen + t <= N && i + t <= N) table[queen + t][i + t]--
      if (queen + t <= N && i - t >= 1) table[queen + t][i - t]--
    }
  }
}

function solution(input) {
  const N = Number(input[0])
  const table = createTable(N)

  bt(table, N, 1)

  return answer
}

console.log(solution(input))

function solution() {
  const N = Number(input[0])
  const cols = [Array.from({ length: N }, () => -1)]
  let answer = 0
  bt(0)

  return answer

  function bt(row) {
    if (row === N) {
      answer += 1
      return
    }

    for (let i = 0; i < N; i++) {
      let possible = true
      for (let t = 0; t < row; t++) {
        if (attackable(row, i, t, cols[t])) {
          possible = false
          break
        }
      }

      if (possible) {
        cols[row] = i
        bt(row + 1)
        cols[row] = -1
      }
    }
  }

  function attackable(r1, c1, r2, c2) {
    if (c1 === c2) return true
    if (r1 + c1 === r2 + c2) return true
    if (r1 - c1 === r2 - c2) return true
    return false
  }

  return answer
}

console.log(solution())