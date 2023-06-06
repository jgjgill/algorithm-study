function solution(n, edge) {
  const node_temp = Array.from({ length: n + 1 }, () => []);
  const count_temp = Array.from({ length: n + 1 }, () => 0);

  for (const [start, end] of edge) {
    node_temp[start].push(end);
    node_temp[end].push(start);
  }

  bfs(1);

  function bfs(index) {
    const queue = [index];
    let index_check = 0;

    while (index_check < queue.length) {
      const cur = queue[index_check];
      index_check += 1;

      for (const node of node_temp[cur]) {
        if (count_temp[node] !== 0) continue;
        if (node === 1) continue;

        count_temp[node] = count_temp[cur] + 1;
        queue.push(node);
      }
    }
  }

  const max = Math.max(...count_temp);

  return count_temp.filter((item) => item === max).length;
}
