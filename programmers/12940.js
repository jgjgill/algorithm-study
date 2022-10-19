// https://school.programmers.co.kr/learn/courses/30/lessons/12940

let gcd = 0;

function getGCD(a, b) {
  if (b === 0) return (gcd = a);

  getGCD(b, a % b);
}

function solution(n, m) {
  getGCD(n, m);

  return [gcd, (n * m) / gcd];
}
