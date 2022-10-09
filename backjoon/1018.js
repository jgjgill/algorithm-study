// https://www.acmicpc.net/problem/1018

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const black = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];
const white = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

let answer = Infinity;

function createGraph() {
  const graph = new Array(N).fill();

  for (let i = 0; i < N; i++) {
    graph[i] = input[i + 1].split("");
  }

  return graph;
}

function checkGraph(graph, x, y) {
  let blackCheck = 0;
  let whiteCheck = 0;

  for (let i = x; i < x + 8; i++) {
    for (let t = y; t < y + 8; t++) {
      if (graph[i][t] !== black[i - x][t - y]) blackCheck++;
      if (graph[i][t] !== white[i - x][t - y]) whiteCheck++;
    }
  }

  answer = Math.min(answer, blackCheck, whiteCheck);
}

function solution() {
  const graph = createGraph();

  for (let i = 0; i <= N - 8; i++) {
    for (let t = 0; t <= M - 8; t++) {
      checkGraph(graph, i, t);
    }
  }

  return answer;
}

console.log(solution());
