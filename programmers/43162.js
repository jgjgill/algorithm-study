// https://school.programmers.co.kr/learn/courses/30/lessons/43162

function solution(n, computers) {
  const dict = Array.from({ length: n + 1 }, () => []);
  const visit = Array.from({ length: n + 1 }, () => false);
  let count = 0;

  computers.forEach((computer, index) => {
    computer.forEach((node, node_index) => {
      if (node === 1 && node_index !== index)
        dict[index + 1].push(node_index + 1);
    });
  });

  for (let i = 1; i <= n; i++) {
    if (visit[i]) continue;
    dfs(i);
    count += 1;
  }

  return count;

  function dfs(node) {
    const stack = [node];
    visit[node] = true;

    while (stack.length !== 0) {
      const current = stack.pop();
      const child = dict[current];

      for (const child_node of child) {
        if (visit[child_node]) continue;

        stack.push(child_node);
        visit[child_node] = true;
      }
    }
  }
}

function solution(n, computers) {
  const visit = Array.from({ length: n }, () => false);
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (visit[i]) continue;
    dfs(i);
    count += 1;
  }

  return count;

  function dfs(node) {
    if (visit[node]) return;
    visit[node] = true;

    computers[node].forEach((computer, index) => {
      if (index !== node && computer === 1) dfs(index);
    });
  }
}

function solution(n, computers) {
  const check = Array.from({ length: n }, () => false);
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (check[i]) continue;

    dfs(computers[i], i);
    count += 1;
  }

  return count;

  function dfs(list, now) {
    for (let i = 0; i < n; i++) {
      if (list[i] === 0) continue;
      if (check[i]) continue;
      if (now === i) continue;

      check[i] = true;
      dfs(computers[i], i);
    }
  }
}
