// https://school.programmers.co.kr/learn/courses/30/lessons/17687

function solution(n, t, m, p) {
  let answer = "";

  let number = 0;
  let tCheck = 0;
  let turn = 0;

  while (true) {
    const changeNumber = number.toString(n).toUpperCase();

    for (let i = 0; i < changeNumber.length; i++) {
      turn++;

      if (turn === p) answer += changeNumber[i];
      if (turn === p) tCheck++;
      if (turn === m) turn = 0;

      if (tCheck === t) return answer;
    }

    number++;
  }
}
