// https://www.acmicpc.net/problem/16953

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const [A, B] = input[0].split(" ").map(Number);

function bfs(start) {
  const stack = [];
  let index = 0;

  stack.push({ number: start, count: 1 });

  while (index < stack.length) {
    const { number, count } = stack[index++];

    if (number === B) return count;

    const first = number * 2;
    const second = number * 10 + 1;

    if (first <= B) {
      stack.push({ number: first, count: count + 1 });
    }

    if (second <= B) {
      stack.push({ number: second, count: count + 1 });
    }
  }

  return -1;
}

function solution() {
  const answer = bfs(A);

  return answer;
}

console.log(solution());
