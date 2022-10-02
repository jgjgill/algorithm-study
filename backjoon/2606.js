// https://www.acmicpc.net/problem/2606

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const N = Number(input[0]);
const C = Number(input[1]);
const check = new Set();
check.add(1);

function createGraph() {
  const graph = new Array(N + 1).fill().map(() => []);

  for (let i = 1; i <= C; i++) {
    const node = input[i + 1].split(" ").map(Number);
    graph[node[1]].push(node[0]);
    graph[node[0]].push(node[1]);
  }

  return graph;
}

function checkGraph(graph) {
  const stack = [];
  let answer = 0;

  stack.push(...graph[1]);

  while (stack.length) {
    const current = stack.pop();
    if (check.has(current)) continue;

    check.add(current);
    stack.push(...graph[current]);
    answer++;
  }

  return answer;
}

function solution() {
  const graph = createGraph();

  const answer = checkGraph(graph);

  return answer;
}

console.log(solution());
