// https://www.acmicpc.net/problem/1987

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const [R, C] = input[0].split(" ").map(Number);
const check = new Array(26).fill(false);
const directions = [
  { dx: 1, dy: 0 },
  { dx: -1, dy: 0 },
  { dx: 0, dy: 1 },
  { dx: 0, dy: -1 },
];

function createGraph() {
  const graph = new Array(R + 1).fill().map(() => []);

  for (let i = 1; i <= R; i++) {
    for (let t = 1; t <= C; t++) {
      graph[i][t] = input[i].split("")[t - 1];
    }
  }

  return graph;
}

let answer = -Infinity;

function bt(graph, x, y, count) {
  answer = Math.max(answer, count);
  for (const direction of directions) {
    const injectX = direction.dx + x;
    const injectY = direction.dy + y;

    if (injectX < 1 || injectY < 1 || injectX > R || injectY > C) continue;
    if (check[graph[injectX][injectY].charCodeAt() - 65] === true) continue;

    check[graph[injectX][injectY].charCodeAt() - 65] = true;
    bt(graph, injectX, injectY, count + 1);
    check[graph[injectX][injectY].charCodeAt() - 65] = false;
  }
}

function solution() {
  const graph = createGraph();
  check[graph[1][1].charCodeAt() - 65] = true;

  bt(graph, 1, 1, 1);

  return answer;
}

console.log(solution());
