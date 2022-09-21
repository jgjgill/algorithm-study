const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const input = fs.readFileSync(filePath).toString().split('\n')

function solution() {
  return input
}

console.log(solution())
