// https://www.acmicpc.net/problem/1697

const fs = require('fs')
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .split('\n')

const [N, K] = input[0].split(' ').map(Number)

const queue = [null]
const checks = new Array(100001).fill(false)

function bfs(now) {
  let index = 1
  queue.push({ now, count: 0 })

  while (index < queue.length) {
    const { now, count } = queue[index++]

    if (checks[now]) continue
    if (now === K) return count

    checks[now] = true

    if (now * 2 <= 100000) {
      queue.push({ now: now * 2, count: count + 1 })
    }

    if (now + 1 <= 100000) {
      queue.push({ now: now + 1, count: count + 1 })
    }

    if (now - 1 >= 0) {
      queue.push({ now: now - 1, count: count + 1 })
    }
  }
}

function solution() {
  const count = bfs(N)

  return count
}

console.log(solution())
