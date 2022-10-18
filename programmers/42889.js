// https://school.programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  const check = [];

  for (let i = 1; i <= N; i++) {
    const left = stages.filter((item) => item === i).length;
    const right = stages.filter((item) => item >= i).length;

    check.push([i, left / right]);
  }

  check.sort((a, b) => b[1] - a[1]);

  return check.map((item) => item[0]);
}

function solution(N, stages) {
  const temp = {};
  const check = [];

  for (let i = 1; i <= N; i++) {
    temp[i] = [0, 0];

    for (let t = 0; t < stages.length; t++) {
      if (stages[t] === i) temp[i][0]++;
      if (stages[t] >= i) temp[i][1]++;
    }

    const fail = temp[i][0] / temp[i][1];

    temp[i][2] = isNaN(fail) ? 0 : fail;
    check[i - 1] = temp[i][2];
    check.sort((a, b) => b - a);
  }

  for (let i = 1; i <= N; i++) {
    for (let t = 1; t <= N; t++) {
      if (temp[t][2] === check[i - 1]) {
        check[i - 1] = t;
        temp[t][2] = null;
      }
    }
  }

  return check;
}
