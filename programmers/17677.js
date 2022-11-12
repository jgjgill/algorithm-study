// https://school.programmers.co.kr/learn/courses/30/lessons/17677

function solution(str1, str2) {
  const answer = [0, 0];
  const regex = /^[a-z]+$/;
  const check = {};

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (let i = 0; i < str1.length - 1; i++) {
    const word = str1[i] + str1[i + 1];

    if (!regex.test(word)) continue;

    if (check[word]) {
      check[word][0]++;
    } else {
      check[word] = [1, 0];
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    const word = str2[i] + str2[i + 1];

    if (!regex.test(word)) continue;

    if (check[word]) {
      check[word][1]++;
    } else {
      check[word] = [0, 1];
    }
  }

  for (const key in check) {
    if (check[key][0] && check[key][1]) {
      answer[0] += Math.min(check[key][0], check[key][1]);
      answer[1] += Math.max(check[key][0], check[key][1]);
    } else {
      answer[1] += check[key][0] + check[key][1];
    }
  }

  if (!answer[0] && !answer[1]) return 65536;
  return Math.floor((answer[0] / answer[1]) * 65536);
}
