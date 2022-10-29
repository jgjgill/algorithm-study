// https://school.programmers.co.kr/learn/courses/30/lessons/12985

function solution(n, a, b) {
  let answer = 1;

  while (
    Math.abs(a - b) !== 1 ||
    Math.abs(Math.floor(a / 2) - Math.floor(b / 2)) !== 1
  ) {
    a = a % 2 ? Math.floor(a / 2) + 1 : a / 2;
    b = b % 2 ? Math.floor(b / 2) + 1 : b / 2;
    answer++;
    console.log(a, b);
  }

  return answer;
}

function solution(n, a, b) {
  let answer = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}
