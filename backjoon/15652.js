// https://www.acmicpc.net/problem/15652

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const answer = [];
const check = [];

function bt(count, index) {
  if (count === M) {
    answer.push([...check]);
    return;
  }

  for (let i = index; i <= N; i++) {
    check.push(i);
    bt(count + 1, i);
    check.pop(i);
  }
}

function solution() {
  bt(0, 1);

  return answer.join("\n").split(",").join(" ");
}

console.log(solution());
