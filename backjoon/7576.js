// https://www.acmicpc.net/problem/7576

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const M = Number(input[0].split(' ')[0])
const N = Number(input[0].split(' ')[1])
const temp = []
const checks = []

for (let i = 1; i <= N; i++) {
  temp[i - 1] = input[i].split(' ')
}

for (let i = 0; i < N; i++) {
  for (let t = 0; t < M; t++) {
    temp[i][t] = Number(temp[i][t])
    if (temp[i][t] === 1) {
      checks.push({x: i, y: t, count: 0})
    }
  }
}

const directions = [
  { dx: -1, dy: 0 },
  { dx: 1, dy: 0 },
  { dx: 0, dy: 1 },
  { dx: 0, dy: -1 },
]

function bfs (graph, queue, directions) {
  let index = 0;
  let count = 0;

  while (index < queue.length) {
    const currentCheck = queue[index++]

    for (const direction of directions) {
      const checkX = direction.dx + currentCheck.x
      const checkY = direction.dy + currentCheck.y

      if (checkX < N && checkY < M && checkX > -1 && checkY > -1 && graph[checkX][checkY] === 0) {
        queue.push({x: checkX, y: checkY, count: currentCheck.count + 1})
        graph[checkX][checkY] = 1
      }
    }

    count = currentCheck.count
  }

  for (const i of graph) {
    if (i.includes(0)) {
      return -1
    }
  }

  return count
}

function solution(input) {
  const count = bfs(input, checks, directions)

  return count
}

console.log(solution(temp))