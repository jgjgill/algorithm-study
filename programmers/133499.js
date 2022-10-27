// https://school.programmers.co.kr/learn/courses/30/lessons/133499

function solution(babbling) {
  const ok = ["aya", "ye", "woo", "ma"];
  let answer = 0;

  for (let word of babbling) {
    let prev = "";
    let check = true;

    while (word.length) {
      if (ok.includes(word[0] + word[1])) {
        if (prev === word[0] + word[1]) {
          check = false;
          break;
        }

        prev = word[0] + word[1];
        word = word.slice(2);
      } else if (ok.includes(word[0] + word[1] + word[2])) {
        if (prev === word[0] + word[1] + word[2]) {
          check = false;
          break;
        }

        prev = word[0] + word[1] + word[2];
        word = word.slice(3);
      } else {
        check = false;
        break;
      }
    }

    if (check) answer++;
  }

  return answer;
}

function solution(babbling) {
  const check1 = /(aya|ye|woo|ma)\1+/;
  const check2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce(
    (answer, word) =>
      !check1.test(word) && check2.test(word) ? ++answer : answer,
    0
  );
}
