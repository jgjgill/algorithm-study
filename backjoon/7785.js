// https://www.acmicpc.net/problem/7785

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  const n = Number(input[0]);
  const check = {};
  const workers = [];

  for (let i = 1; i < n + 1; i++) {
    const [name, status] = input[i].split(" ");

    if (name in check) {
      delete check[name];
    } else {
      check[name] = status;
    }
  }

  for (const name in check) {
    workers.push(name);
  }

  return workers.sort((a, b) => (a < b ? 1 : -1)).join("\n");
}

console.log(solution());
