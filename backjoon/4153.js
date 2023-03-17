// https://www.acmicpc.net/problem/4153

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution() {

  for (let i = 0; i < input.length; i++) {
    const [first, second, third] = input[i].split(' ').map(Number).sort((a, b) => b - a)
    if (first + second + third === 0) break

    const answer = first ** 2 === second ** 2 + third ** 2 ? 'right' : 'wrong'

    console.log(answer)
  }
}

solution();
