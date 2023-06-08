// https://school.programmers.co.kr/learn/courses/30/lessons/43238

function solution(n, times) {
  let left = 1;
  let right = Math.max(...times) * n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const check = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);

    if (check >= n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

function solution(n, times) {
  times.sort((a, b) => a - b);

  let left = 1;
  let right = times.at(-1) * n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    const check = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);
    if (check >= n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
