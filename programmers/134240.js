// https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(food) {
  let answer = "";

  for (let i = 1; i < food.length; i++) {
    const check = food[i] % 2 === 1 ? (food[i] - 1) / 2 : food[i] / 2;

    answer += String(i).repeat(check);
  }

  answer += "0";

  for (let i = food.length - 1; i > 0; i--) {
    const check = food[i] % 2 === 1 ? (food[i] - 1) / 2 : food[i] / 2;

    answer += String(i).repeat(check);
  }

  return answer;
}
