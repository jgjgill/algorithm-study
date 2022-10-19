// https://school.programmers.co.kr/learn/courses/30/lessons/12921

function solution(n) {
  const check = new Set();

  for (let i = 2; i <= n; i++) {
    check.add(i);
  }

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (!check.has(i)) continue;

    for (let t = i * 2; t <= n; t += i) {
      check.delete(t);
    }
  }

  return check.size;
}

function solution(n) {
  let answer = 0;

  for (let i = 2; i <= n; i++) {
    let check = true;

    for (let t = 2; t <= Math.sqrt(i); t++) {
      if (i % t === 0) {
        check = false;
        break;
      }
    }

    if (check) answer++;
    check = true;
  }

  return answer;
}
