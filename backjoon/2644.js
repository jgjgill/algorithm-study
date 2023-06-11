// https://www.acmicpc.net/problem/2644

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  const n = Number(input[0]);
  const [first, second] = input[1].split(" ").map(Number);
  const relation = Number(input[2]);
  const temp = Array.from({ length: n + 1 }, () => []);
  const visited = Array.from({ length: n }, () => false);

  for (let i = 3; i < 3 + relation; i++) {
    const list = input[i].split(" ").map(Number);

    temp[list[0]].push(list[1]);
    temp[list[1]].push(list[0]);
  }

  const answer = bfs(first);

  function bfs(now) {
    const queue = [[now, 1]];
    let index = 0;

    while (index < queue.length) {
      const [current, count] = queue[index];
      index += 1;

      for (const child of temp[current]) {
        if (child === second) return count;
        if (visited[child]) continue;

        visited[child] = true;
        queue.push([child, count + 1]);
      }
    }
  }

  return answer ?? -1;
}

console.log(solution());
