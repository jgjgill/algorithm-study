// https://school.programmers.co.kr/learn/courses/30/lessons/92335

function solution(n, k) {
  let count = 0;

  n = n.toString(k).split("0").map(Number);

  for (let i = 0; i < n.length; i++) {
    if (n[i] === 1 || !n[i]) continue;

    let check = true;

    for (let t = 2; t <= Math.sqrt(n[i]); t++) {
      if (!(n[i] % t)) {
        check = false;
        break;
      }
    }

    if (check) count++;
  }

  return count;
}
