// https://school.programmers.co.kr/learn/courses/30/lessons/131128

function solution(X, Y) {
  const xCheck = {};
  const check = [];
  let answer = "";

  for (let i = 0; i < X.length; i++) {
    xCheck[X[i]] = xCheck[X[i]] ? ++xCheck[X[i]] : 1;
  }

  for (let i = 0; i < Y.length; i++) {
    if (xCheck[Y[i]]) {
      check.push(Number(Y[i]));
      xCheck[Y[i]]--;
    }
  }

  if (check.length === 0) {
    answer = "-1";
  } else if (check.length > 1 && check[0] === 0) {
    answer = "0";
  } else {
    check.sort((a, b) => b - a);
    answer = check.join("");
  }

  return answer;
}
