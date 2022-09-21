// https://www.acmicpc.net/problem/14503

const fs = require('fs')
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .split('\n')

const [N, M] = input[0].split(' ').map(Number)
const [R, C, D] = input[1].split(' ').map(Number)

function createGraph(input) {
  const graph = new Array(N).fill().map(() => [])

  for (let i = 2; i < N + 2; i++) {
    for (let t = 0; t < M; t++) {
      graph[i - 2][t] = Number(input[i].split(' ')[t])
    }
  }

  return graph
}

function directionLeft(d) {
  const leftMoves = {
    0: [-1, 0],
    1: [0, 1],
    2: [1, 0],
    3: [0, -1],
  }

  return leftMoves[d]
}

function directionBack(d) {
  const backMoves = {
    0: [1, 0],
    1: [0, -1],
    2: [-1, 0],
    3: [0, 1],
  }

  return backMoves[d]
}

function dfs(graph, start) {
  const stack = []
  let count = 0

  stack.push({ x: start.x, y: start.y, d: start.d })

  while (stack.length) {
    const current = stack.pop()

    if (!graph[current.x][current.y]) {
      graph[current.x][current.y] = 2
      count++
    }

    let directionCheck = 0

    while (directionCheck < 4) {
      if (current.d === 0) {
        current.d = 3
      } else {
        current.d--
      }

      const [x, y] = directionLeft(current.d)
      const checkX = current.x + x
      const checkY = current.y + y

      if (!graph[checkX][checkY]) {
        stack.push({ x: checkX, y: checkY, d: current.d })
        break
      } else {
        directionCheck++
      }
    }

    const [x, y] = directionBack(current.d)
    const checkX = current.x + x
    const checkY = current.y + y

    if (directionCheck === 4) {
      if (graph[checkX][checkY] === 1) {
        return count
      } else {
        stack.push({ x: checkX, y: checkY, d: current.d })
      }
    }
  }

  return count
}

function solution(input) {
  const graph = createGraph(input)
  const answer = dfs(graph, { x: R, y: C, d: D })

  return answer
}

console.log(solution(input))
