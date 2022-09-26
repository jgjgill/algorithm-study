// https://www.acmicpc.net/problem/1992

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const N = Number(input[0]);

function createGraph() {
  const graph = new Array(N + 1).fill().map(() => []);

  for (let i = 1; i <= N; i++) {
    for (let t = 1; t <= N; t++) {
      graph[i][t] = Number(input[i].split("")[t - 1]);
    }
  }

  return graph;
}
let answer;

function recur(graph) {
  if (graph.length === 2) {
    answer = graph[1][1];
    return;
  }

  const nextGraph = new Array((graph.length - 1) / 2 + 1).fill().map(() => []);

  for (let i = 1; i < graph.length; i = i + 2) {
    for (let t = 1; t < graph.length; t = t + 2) {
      const sum =
        graph[i][t] + graph[i][t + 1] + graph[i + 1][t] + graph[i + 1][t + 1];
      const nextI = Math.floor(i / 2) + 1;
      const nextT = Math.floor(t / 2) + 1;
      if (sum === 0 || sum === 4) {
        nextGraph[nextI][nextT] = graph[i][t];
      } else {
        nextGraph[nextI][nextT] = `(${graph[i][t]}${graph[i][t + 1]}${
          graph[i + 1][t]
        }${graph[i + 1][t + 1]})`;
      }
    }
  }

  recur(nextGraph);
}

function solution() {
  const graph = createGraph();
  recur(graph);

  return answer;
}

console.log(solution());
