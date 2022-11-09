// https://school.programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  const answer = [];
  const days = [];

  for (let i = 0; i < progresses.length; i++) {
    const rest = 100 - progresses[i];
    const day = Math.floor(rest / speeds[i]) + (rest % speeds[i] ? 1 : 0);

    days.push(day);
  }

  let max = days[0];
  let index = 1;
  let check = 1;

  while (index < days.length) {
    if (max < days[index]) {
      answer.push(check);

      max = days[index];
      check = 1;
    } else {
      check++;
    }

    index++;
  }

  answer.push(check);

  return answer;
}
