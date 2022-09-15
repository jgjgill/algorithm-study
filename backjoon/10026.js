// https://www.acmicpc.net/problem/10026

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const directions = [
  { dx: 1, dy: 0 },
  { dx: -1, dy: 0 },
  { dx: 0, dy: 1 },
  { dx: 0, dy: -1 },
]

function createGraph(input, diff) {
  const N = Number(input[0])

  const graph = new Array(N + 1).fill().map(() => [])

  for (let i = 1; i <= N; i++) {
    const colors = input[i].trim().split('')
    for (let t = 1; t <= N; t++) {
      if (diff) {
        graph[i][t] = colors[t - 1] === 'R' ? 'G' : colors[t - 1]
      } else {
        graph[i][t] = colors[t - 1]
      }
    }
  }

  return graph
}

function dfs(graph, N) {
  const checks = []
  let count = 0

  for (let i = 1; i <= N; i++) {
    for (let t = 1; t <= N; t++) {
      const startColor = graph[i][t]
      if (!startColor) continue

      checks.push({ x: i, y: t })
      count++

      while (checks.length) {
        const current = checks.pop()
        graph[current.x][current.y] = 0

        for (const direction of directions) {
          const injectX = direction.dx + current.x
          const injectY = direction.dy + current.y

          if (injectX >= 1 && injectY >= 1 && injectX <= N && injectY <= N) {
            if (graph[injectX][injectY] === startColor) {
              checks.push({ x: injectX, y: injectY })
            }
          }
        }
      }
    }
  }

  return count
}

function solution(input) {
  const N = Number(input[0])
  const graph = createGraph(input, false)
  const diffGraph = createGraph(input, true)

  const count = dfs(graph, N)
  const diffCount = dfs(diffGraph, N)

  return `${count} ${diffCount}`
}

console.log(solution(input))
