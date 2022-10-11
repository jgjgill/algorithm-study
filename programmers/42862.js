// https://school.programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
  const students = {};
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    students[i] = 1;
  }

  lost.forEach((item) => (students[item] -= 1));
  reserve.forEach((item) => (students[item] += 1));

  for (let i = 1; i <= n; i++) {
    if (students[i] === 2 && students[i - 1] === 0) {
      students[i - 1]++;
      students[i]--;
    }

    if (students[i] === 2 && students[i + 1] === 0) {
      students[i + 1]++;
      students[i]--;
    }
  }

  for (const key in students) {
    if (students[key] >= 1) {
      answer++;
    }
  }

  return answer;
}
