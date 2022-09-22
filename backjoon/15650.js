// https://www.acmicpc.net/problem/15650

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const input = fs.readFileSync(filePath).toString().split('\n')
const [N, M] = input[0].split(' ').map(Number)
const answer = []

function bt(index) {
  if (answer.length === M) {
    console.log(...answer)
    return
  }

  for (let i = index; i <= N; i++) {
    answer.push(i)
    bt(i + 1)
    answer.pop()
  }
}

function solution() {
  bt(1)
}

solution()
