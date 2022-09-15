// /dev/stdin
// example.txt

const fs = require('fs')
const input = fs.readFileSync('example.txt').toString().split('\n')

function solution(input) {
  return input
}

console.log(solution(input))
