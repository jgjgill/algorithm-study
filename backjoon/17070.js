// https://www.acmicpc.net/problem/17070

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const N = Number(input[0]);
const directions = [
  { dx: 0, dy: 1 },
  { dx: 1, dy: 0 },
  { dx: 1, dy: 1 },
];
let answer = 0;

function createGraph() {
  const graph = new Array(N + 1).fill().map(() => []);

  for (let i = 1; i <= N; i++) {
    const row = input[i].split(" ");
    for (let t = 1; t <= N; t++) {
      graph[i][t] = Number(row[t - 1]);
    }
  }

  return graph;
}

function checkGraph(graph, x, y, pipe) {
  if (x === N && y === N) {
    return answer++;
  }

  for (let i = 0; i < 3; i++) {
    const currentX = x + directions[i].dx;
    const currentY = y + directions[i].dy;

    if (currentX > N || currentY > N || graph[currentX][currentY]) continue;
    if ((i === 0 && pipe === 1) || (i === 1 && pipe === 0)) continue;
    if (i === 2 && (graph[x][y + 1] || graph[x + 1][y])) continue;

    checkGraph(graph, currentX, currentY, i);
  }
}

function solution() {
  const graph = createGraph();
  checkGraph(graph, 1, 2, 0);

  return answer;
}

console.log(solution());
