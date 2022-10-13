// https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
  const change = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let answer = [];
  let check = "";

  for (const item of s) {
    const current = Number(item);

    if (0 <= current || current <= 9) {
      answer.push(current);
    } else {
      check += item;
    }

    if (change[check] !== undefined) {
      answer.push(change[check]);
      check = "";
    }
  }

  return Number(answer.join(""));
}
