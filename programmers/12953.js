// https://school.programmers.co.kr/learn/courses/30/lessons/12953

let answer = 0;
let gcd = 0;

function getGCD(a, b) {
  if (b === 0) return (gcd = a);

  getGCD(b, a % b);
}

function getAnswer(arr, a, b, index, check) {
  if (index >= check) return;

  getGCD(a, b);

  const lcm = (a * b) / gcd;

  answer = lcm;

  getAnswer(arr, lcm, arr[index + 1], index + 1, check);
}

function solution(arr) {
  if (arr.length === 1) return arr[0];

  getAnswer(arr, arr[0], arr[1], 1, arr.length);

  return answer;
}
