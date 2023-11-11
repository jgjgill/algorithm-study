// https://www.acmicpc.net/problem/1476

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  const [E, S, M] = input[0].split(" ").map(Number);
  let count = 1;

  while (true) {
    if (
      (count - E) % 15 === 0 &&
      (count - S) % 28 === 0 &&
      (count - M) % 19 === 0
    ) {
      return count;
    } else {
      count += 1;
    }
  }
}

console.log(solution());
