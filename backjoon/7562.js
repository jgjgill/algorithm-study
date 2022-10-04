// https://www.acmicpc.net/problem/7562

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const T = Number(input[0]);
const directions = [
  { dx: -2, dy: -1 },
  { dx: -1, dy: -2 },
  { dx: -2, dy: 1 },
  { dx: -1, dy: 2 },
  { dx: 1, dy: -2 },
  { dx: 2, dy: -1 },
  { dx: 1, dy: 2 },
  { dx: 2, dy: 1 },
];

function createGraph(N) {
  const graph = new Array(N).fill().map(() => []);

  for (let i = 0; i < N; i++) {
    for (let t = 0; t < N; t++) {
      graph[i][t] = 0;
    }
  }

  return graph;
}

function bfs(graph, N, start, end) {
  const queue = [];
  let index = 0;
  queue.push({ x: start[0], y: start[1], count: 0 });
  graph[start[0]][start[1]] = 1;

  while (index < queue.length) {
    const { x, y, count } = queue[index++];
    if (x === end[0] && y === end[1]) return count;

    for (const { dx, dy } of directions) {
      const injectX = dx + x;
      const injectY = dy + y;
      if (injectX < 0 || injectY < 0 || injectX >= N || injectY >= N) continue;
      if (graph[injectX][injectY]) continue;

      graph[injectX][injectY] = 1;

      queue.push({ x: injectX, y: injectY, count: count + 1 });
    }
  }

  return 0;
}

function solution() {
  for (let i = 1; i <= T; i++) {
    const N = Number(input[1 + 3 * (i - 1)]);
    const start = input[2 + 3 * (i - 1)].split(" ").map(Number);
    const end = input[3 + 3 * (i - 1)].split(" ").map(Number);
    const graph = createGraph(N);

    const answer = bfs(graph, N, start, end);

    console.log(answer);
  }
}

solution();
