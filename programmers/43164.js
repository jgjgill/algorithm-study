// https://school.programmers.co.kr/learn/courses/30/lessons/43164

function solution(tickets) {
  const visit = Array.from({ length: tickets.length }, () => false);
  const temp = ["ICN"];
  let finish = false;
  let answer;

  tickets.sort();
  dfs("ICN", 0);

  return answer;

  function dfs(start_air, count) {
    if (finish) return;
    if (count === tickets.length) {
      answer = [...temp];
      finish = true;
      return;
    }

    for (let i = 0; i < tickets.length; i++) {
      if (visit[i]) continue;
      if (tickets[i][0] !== start_air) continue;
      temp.push(tickets[i][1]);
      visit[i] = true;
      dfs(tickets[i][1], count + 1);
      temp.pop();
      visit[i] = false;
    }
  }
}

function solution(tickets) {
  const visit = Array.from({ length: tickets.length }, () => false);
  const temp = ["ICN"];
  let finish = false;
  let answer;

  tickets.sort();
  dfs("ICN", 0);

  return answer;

  function dfs(start_air, count) {
    if (finish) return;
    if (count === tickets.length) {
      answer = [...temp];
      finish = true;
      return;
    }

    for (let i = 0; i < tickets.length; i++) {
      if (visit[i]) continue;
      if (tickets[i][0] !== start_air) continue;
      temp.push(tickets[i][1]);
      visit[i] = true;
      dfs(tickets[i][1], count + 1);
      temp.pop();
      visit[i] = false;
    }
  }
}
