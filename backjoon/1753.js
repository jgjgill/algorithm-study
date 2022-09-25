// https://www.acmicpc.net/problem/1753

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const [V, E] = input[0].split(" ").map(Number);
const K = Number(input[1]);

class MinHeap {
  constructor() {
    this.nodes = [];
  }

  insert(value) {
    this.nodes.push(value);
    this.bubbleUp();
  }

  bubbleUp(index = this.nodes.length - 1) {
    if (index < 1) return;

    const currentNode = this.nodes[index];
    const parentIndex = Math.floor((index - 1) / 2);
    const parentNode = this.nodes[parentIndex];
    if (parentNode.point <= currentNode.point) return;

    [this.nodes[index], this.nodes[parentIndex]] = [
      this.nodes[parentIndex],
      this.nodes[index],
    ];
    index = parentIndex;
    this.bubbleUp(index);
  }

  extract() {
    const min = this.nodes[0];
    if (this.nodes.length === 1) {
      this.nodes.pop();
      return min;
    }
    this.nodes[0] = this.nodes.pop();
    this.trickleDown();
    return min;
  }

  trickleDown(index = 0) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    const length = this.nodes.length;
    let minimum = index;

    if (!this.nodes[rightChildIndex] && !this.nodes[leftChildIndex]) return;
    if (!this.nodes[rightChildIndex]) {
      if (this.nodes[leftChildIndex].point < this.nodes[minimum].point) {
        minimum = leftChildIndex;
      }
      return;
    }

    if (this.nodes[leftChildIndex].point > this.nodes[rightChildIndex].point) {
      if (
        rightChildIndex <= length &&
        this.nodes[rightChildIndex].point < this.nodes[minimum].point
      ) {
        minimum = rightChildIndex;
      }
    } else {
      if (
        leftChildIndex <= length &&
        this.nodes[leftChildIndex].point < this.nodes[minimum].point
      ) {
        minimum = leftChildIndex;
      }
    }

    if (minimum !== index) {
      [this.nodes[index], this.nodes[minimum]] = [
        this.nodes[minimum],
        this.nodes[index],
      ];

      this.trickleDown(minimum);
    }
  }
}

function createGraph() {
  const graph = new Array(V + 1).fill().map(() => []);

  for (let i = 1; i <= E; i++) {
    const [U, V, W] = input[i + 1].split(" ").map(Number);

    graph[U].push({ number: V, point: W });
  }

  return graph;
}

function dijkstra(graph) {
  const dp = new Array(V + 1).fill(Infinity);

  dp[K] = 0;

  const minHeap = new MinHeap();
  minHeap.insert({ number: K, point: 0 });

  while (minHeap.nodes.length) {
    const { number, point } = minHeap.extract();

    if (graph[number] === undefined) continue;
    if (dp[number] < point) continue;

    graph[number].forEach((next) => {
      if (dp[next.number] <= point + next.point) return;

      dp[next.number] = point + next.point;
      minHeap.insert({ number: next.number, point: dp[next.number] });
    });
  }

  return dp;
}

function solution() {
  const graph = createGraph();

  const answer = dijkstra(graph);

  for (let i = 1; i < answer.length; i++) {
    const point = answer[i] === Infinity ? "INF" : answer[i];
    console.log(point);
  }
}

solution();
