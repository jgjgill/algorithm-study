// https://school.programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
  const cond2_n = String(n.toString(2)).match(/1/g).length;

  while (n++) {
    const cond2_check = String(n.toString(2)).match(/1/g).length;

    if (cond2_n === cond2_check) {
      return n;
    }
  }
}
