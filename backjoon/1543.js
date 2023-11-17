// https://www.acmicpc.net/problem/1543

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  const document = input[0];
  const word = input[1];
  let index = 0;
  let answer = 0;

  while (index < document.length) {
    if (document.slice(index, index + word.length) === word) {
      answer += 1;
      index += word.length;
    } else {
      index += 1;
    }
  }

  return answer;
}

console.log(solution());
