// https://www.acmicpc.net/problem/2477

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  const K = Number(input[0]);
  const check = Array.from({ length: 6 }, () => []);
  let maxRect = 0;
  let index;

  for (let i = 1; i < 7; i++) {
    check[i - 1] = input[i].split(" ").map(Number);
  }

  for (let i = 0; i < 6; i++) {
    const [curDir, curValue] = check[i];
    const [nextDir, nextValue] = check[(i + 1) % 6];

    const curRect = curValue * nextValue;

    if (curRect > maxRect) {
      maxRect = curRect;
      index = i;
    }
  }

  const smallRect = check[(index + 3) % 6][1] * check[(index + 4) % 6][1];

  return (maxRect - smallRect) * K;
}

console.log(solution());
