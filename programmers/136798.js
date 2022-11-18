// https://school.programmers.co.kr/learn/courses/30/lessons/136798

function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    let count = 0;

    for (let t = 1; t < Math.sqrt(i); t++) {
      if (i % t) continue;

      count++;
    }
    count *= 2;
    if (Number.isInteger(Math.sqrt(i))) count++;

    answer += count > limit ? power : count;
  }

  return answer;
}
