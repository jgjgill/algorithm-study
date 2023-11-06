// https://www.acmicpc.net/problem/1236

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  const [N, M] = input[0].split(" ").map(Number);
  const rows = Array.from({ length: N }, () => false);
  const cols = Array.from({ length: M }, () => false);

  for (let i = 0; i < N; i++) {
    const temp = input[i + 1].split("");

    for (let t = 0; t < M; t++) {
      if (temp[t] === "X") {
        rows[i] = true;
        cols[t] = true;
      }
    }
  }

  return Math.max(
    rows.filter((row) => !row).length,
    cols.filter((col) => !col).length
  );
}

console.log(solution());
