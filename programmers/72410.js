// https://school.programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
  let answer = new_id.toLowerCase();

  answer = answer.match(/[0-9._\-a-z]/g).join("");

  answer = answer.replace(/[.]{2,}/g, ".");

  if (answer[0] === ".") {
    answer = answer.slice(1);
  }

  if (answer.at(-1) === ".") {
    answer = answer.slice(0, -1);
  }

  if (!answer.length) {
    answer += "a";
  }

  if (answer.length >= 16) {
    answer = answer.slice(0, 15);
  }

  if (answer.at(-1) === ".") {
    answer = answer.slice(0, -1);
  }

  while (answer.length <= 2) {
    answer += answer.at(-1);
  }

  return answer;
}
