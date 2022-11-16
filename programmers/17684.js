// https://school.programmers.co.kr/learn/courses/30/lessons/17684

function solution(msg) {
  const answer = [];
  const check = {};
  let index = 27;
  let temp = "";

  for (let i = 0; i < 26; i++) {
    check[String.fromCharCode(i + 65)] = i + 1;
  }

  for (let i = 0; i < msg.length; i++) {
    temp += msg[i];

    if (!check[temp]) {
      answer.push(check[temp.slice(0, -1)]);
      check[temp] = index++;
      temp = msg[i];
    }
  }

  if (temp) answer.push(check[temp]);

  return answer;
}
