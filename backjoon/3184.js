// https://www.acmicpc.net/problem/3184

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const [R, C] = input[0].split(" ").map(Number);
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
const wolves = [];
let oCount = 0;
let vCount = 0;
let oCheck = 0;
let vCheck = 0;

function createGraph() {
  const graph = new Array(R + 1).fill().map(() => []);

  for (let i = 1; i <= R; i++) {
    const node = input[i].split("");

    for (let t = 1; t <= C; t++) {
      if (node[t - 1] === "v") {
        wolves.push([i, t]);
        vCount++;
      }

      if (node[t - 1] === "o") {
        oCount++;
      }

      graph[i][t] = node[t - 1];
    }
  }

  return graph;
}

function dfs(graph, x, y) {
  if (x < 1 || y < 1 || x > R || y > C) return;
  if (graph[x][y] === "#") return;

  if (graph[x][y] === "v") {
    vCheck++;
  }

  if (graph[x][y] === "o") {
    oCheck++;
  }

  graph[x][y] = "#";

  for (let i = 0; i < 4; i++) {
    dfs(graph, dx[i] + x, dy[i] + y);
  }
}

function solution() {
  const graph = createGraph();

  for (let i = 0; i < wolves.length; i++) {
    const [x, y] = wolves[i];
    if (graph[x][y] === "#") continue;

    dfs(graph, x, y);

    if (oCheck > vCheck) {
      vCount -= vCheck;
    } else {
      oCount -= oCheck;
    }

    oCheck = 0;
    vCheck = 0;
  }

  console.log(oCount, vCount);
}

solution();
