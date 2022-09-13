// https://www.acmicpc.net/problem/2178

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const [N, M] = input[0].split(' ').map(Number)

const directions = [
  { dx: 1, dy: 0 },
  { dx: -1, dy: 0 },
  { dx: 0, dy: 1 },
  { dx: 0, dy: -1 },
]

function createGraph(input) {
  const graph = []

  for (let i = 1; i <= N; i++) {
    graph[i] = []
  }

  for (let i = 0; i < N; i++) {
    for (let t = 0; t < M; t++) {
      graph[i + 1][t + 1] = Number(input[i + 1].split('')[t])
    }
  }

  return graph
}

function bfs(graph) {
  const queue = []

  let index = 0

  queue.push({ x: 1, y: 1 })

  while (index < queue.length) {
    const current = index++

    for (const direction of directions) {
      const x = queue[current].x + direction.dx
      const y = queue[current].y + direction.dy

      if (x <= N && x > 0 && y <= M && y > 0) {
        if (graph[x][y] === 1) {
          queue.push({ x, y })
          graph[x][y] = graph[queue[current].x][queue[current].y] + 1
        }
      }
    }
  }

  return graph[N][M]
}

function solution(input) {
  const graph = createGraph(input)
  const answer = bfs(graph)

  return answer
}

console.log(solution(input))
