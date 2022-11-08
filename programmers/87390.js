// https://school.programmers.co.kr/learn/courses/30/lessons/87390

function solution(n, left, right) {
  const answer = [];

  for (let i = 0; i <= right - left; i++) {
    answer[i] =
      Math.max(Math.floor((left + i) / n), Math.floor((left + i) % n)) + 1;
  }

  return answer;
}
