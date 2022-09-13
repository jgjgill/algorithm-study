// https://www.acmicpc.net/problem/1260

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const N = Number(input[0].split(' ')[0])
const M = Number(input[0].split(' ')[1])
const V = Number(input[0].split(' ')[2])

const graph = new Array(N + 1)

for (let i = 0; i < graph.length; i++) {
  graph[i] = []
}

for (let i = 0; i < M; i++) {
  const [parent, child] = input[i + 1].split(' ').map(Number)
  graph[parent].push(child)
  graph[child].push(parent)
}

graph.forEach((item) => {
  item.sort((a, b) => a - b)
})

const checks = new Array(N + 1).fill(false)
const answer = []

function dfs(start) {
  if (checks[start]) return

  checks[start] = true
  answer.push(start)

  for (const node of graph[start]) {
      dfs(node)
  }

  return answer
}

function bfs(start) {
  const checks = new Array(N + 1).fill(false)
  const queue = []
  const answer = []

  let index = 0

  queue.push(start)

  while (index < queue.length) {
    const current = index++

    if (!checks[queue[current]]) {
      checks[queue[current]] = true
      answer.push(queue[current])

      for (const node of graph[queue[current]]) {
        queue.push(node)
      }
    }
  }

  return answer
}

function solution(input) {
  const dfsAnswer = dfs(V).join(' ')
  const bfsAnswer = bfs(V).join(' ')

  return dfsAnswer + '\n' + bfsAnswer
}

console.log(solution())
