// https://www.acmicpc.net/problem/3985

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const L = new Array(Number(input[0]) + 1).fill(0);
const N = Number(input[1]);
let diffMax = -Infinity;
let realMax = -Infinity;
let first;
let second;

function createFirst(start, end, number) {
  const diff = end - start;

  if (diff > diffMax) {
    diffMax = diff;
    first = number;
  }
}

function createSecond(start, end, count, number) {
  for (let t = start; t <= end; t++) {
    if (L[t]) continue;

    L[t] = number;
    count++;
  }

  if (count > realMax) {
    realMax = count;
    second = number;
  }
}

function solution() {
  for (let i = 1; i <= N; i++) {
    const [start, end] = input[i + 1].split(" ").map(Number);

    createFirst(start, end, i);
    createSecond(start, end, 0, i);
  }

  console.log(first);
  console.log(second);
}

solution();
