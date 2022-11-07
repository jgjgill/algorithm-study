// https://school.programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  const check = {};

  let answer = 1;

  for (const [name, type] of clothes) {
    check[type] = (check[type] || 0) + 1;
  }

  for (const key in check) {
    answer *= check[key] + 1;
  }

  return answer - 1;
}

// (x+a)(x+b)(x+c) = x3 + (a+b+c)x2 + (ab+bc+ca)x + (abc)
