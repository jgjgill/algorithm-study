// https://www.acmicpc.net/problem/6603

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const answer = [];
const count = [];

function bt(K, S, start) {
  if (count.length === 6) {
    return answer.push([...count]);
  }

  for (let i = start; i < K; i++) {
    count.push(S[i]);
    bt(K, S, i + 1);
    count.pop(S[i]);
  }
}

function solution() {
  let index = 0;

  while (true) {
    const [K, ...S] = input[index++].split(" ").map(Number);
    if (K === 0) {
      answer.pop();
      break;
    }

    bt(K, S, 0);
    answer.push("");
  }

  console.log(answer.join("\n").split(",").join(" "));
}

solution();
