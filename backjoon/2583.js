// https://www.acmicpc.net/problem/2583

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const [M, N, K] = input[0].split(" ").map(Number);
const directions = [
  { dx: 1, dy: 0 },
  { dx: -1, dy: 0 },
  { dx: 0, dy: 1 },
  { dx: 0, dy: -1 },
];
const answer = [];

function createGraph() {
  const graph = new Array(M).fill().map(() => []);

  for (let t = 0; t < M; t++) {
    for (let i = 0; i < N; i++) {
      graph[t][i] = false;
    }
  }

  return graph;
}

function checkRect(graph) {
  for (let i = 1; i <= K; i++) {
    const rect = input[i].split(" ").map(Number);

    for (let q = rect[1]; q < rect[3]; q++) {
      for (let t = rect[0]; t < rect[2]; t++) {
        graph[q][t] = true;
      }
    }
  }
}

function dfs(graph, start) {
  const stack = [];
  let count = 0;
  stack.push(start);

  while (stack.length) {
    const { x, y } = stack.pop();

    if (x < 0 || y < 0 || x >= M || y >= N) continue;
    if (graph[x][y]) continue;

    graph[x][y] = true;
    count++;

    for (const { dx, dy } of directions) {
      const injectX = dx + x;
      const injectY = dy + y;

      stack.push({ x: injectX, y: injectY });
    }
  }

  return count;
}

function solution() {
  const graph = createGraph();

  checkRect(graph);

  for (let i = 0; i < M; i++) {
    for (let t = 0; t < N; t++) {
      if (graph[i][t]) continue;

      const count = dfs(graph, { x: i, y: t });
      answer.push(count);
    }
  }

  console.log(answer.length);
  console.log(answer.sort((a, b) => a - b).join(" "));
}

solution();
