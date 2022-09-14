// https://www.acmicpc.net/problem/1012

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const directions = [
  { dx: 1, dy: 0 },
  { dx: -1, dy: 0 },
  { dx: 0, dy: 1 },
  { dx: 0, dy: -1 },
]

function createGraph(M, N, K, answerCount) {
  const graph = new Array(M).fill().map(() => [])
  const startGroup = []

  for (let i = 0; i < M; i++) {
    for (let k = 0; k < N; k++) {
      graph[i][k] = 0
    }
  }

  for (let i = answerCount + 1; i <= answerCount + K; i++) {
    const [x, y] = input[i].split(' ').map(Number)
    graph[x][y] = 1
    startGroup.push({ x, y })
  }

  return [graph, startGroup]
}

function dfs(start, graph) {
  if (!graph[start.x][start.y]) return

  graph[start.x][start.y] = 0

  for (const direction of directions) {
    const injectX = direction.dx + start.x
    const injectY = direction.dy + start.y

    if (
      injectX >= 0 &&
      injectY >= 0 &&
      injectX < graph.length &&
      injectY < graph[0].length
    ) {
      dfs({ x: injectX, y: injectY }, graph)
    }
  }
}

function solution(input) {
  const T = Number(input[0])
  const answers = []

  let answerCount = 1

  for (let i = 1; i <= T; i++) {
    const [M, N, K] = input[answerCount].split(' ').map(Number)
    const [graph, startGroup] = createGraph(M, N, K, answerCount)
    let count = 0

    for (const start of startGroup) {
      if (graph[start.x][start.y]) {
        dfs({ x: start.x, y: start.y }, graph)
        count++
      }
    }

    answerCount += K + 1
    answers.push(count)
  }

  return answers.join('\n')
}

console.log(solution(input))
