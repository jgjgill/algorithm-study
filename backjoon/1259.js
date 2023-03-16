const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '0') break
    
    const answer = input[i].trim() === input[i].trim().split('').reverse().join('') ? 'yes' : 'no'
    console.log(answer)
  }
}

solution()
