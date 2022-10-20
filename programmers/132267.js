// https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    const check = Math.floor(n / a);

    answer += check * b;
    n += check * b - check * a;
  }

  return answer;
}
