// https://school.programmers.co.kr/learn/courses/30/lessons/42577

function solution(phone_book) {
  const check = {};

  phone_book.sort((a, b) => a.length - b.length);

  for (let i = 0; i < phone_book.length; i++) {
    for (let t = phone_book[0].length; t < phone_book[i].length; t++) {
      if (check[phone_book[i].slice(0, t)]) return false;
    }

    check[phone_book[i]] = true;
  }

  return true;
}
