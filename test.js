const fs = require('fs')
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .split('\n')

function solution(input) {
  return input
}

console.log(solution(input))
