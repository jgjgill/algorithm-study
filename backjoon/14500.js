// https://www.acmicpc.net/problem/14500

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const check = new Array(N + 1).fill().map(() => new Array(M + 1).fill(false));
const directions = [
  { dx: 1, dy: 0 },
  { dx: -1, dy: 0 },
  { dx: 0, dy: 1 },
  { dx: 0, dy: -1 },
];

function createGraph() {
  const graph = new Array(N + 1).fill().map(() => []);

  for (let i = 1; i <= N; i++) {
    for (let t = 1; t <= M; t++) {
      graph[i][t] = Number(input[i].split(" ")[t - 1]);
    }
  }

  return graph;
}

let answer = -Infinity;

function bt(graph, count, start) {
  if (count === 4) {
    answer = Math.max(answer, start.point);
    return;
  }

  for (const direction of directions) {
    const injectX = direction.dx + start.x;
    const injectY = direction.dy + start.y;

    if (injectX < 1 || injectY < 1 || injectX > N || injectY > M) continue;
    if (check[injectX][injectY]) continue;

    const point = start.point + graph[injectX][injectY];

    if (count === 2) {
      check[injectX][injectY] = true;
      bt(graph, count + 1, { x: start.x, y: start.y, point });
      check[injectX][injectY] = false;
    }

    check[injectX][injectY] = true;
    bt(graph, count + 1, { x: injectX, y: injectY, point });
    check[injectX][injectY] = false;
  }
}

function solution() {
  const graph = createGraph();

  for (let i = 1; i <= N; i++) {
    for (let t = 1; t <= M; t++) {
      check[i][t] = true;
      bt(graph, 1, { x: i, y: t, point: graph[i][t] });
      check[i][t] = false;
    }
  }

  console.log(answer);
}

solution();
