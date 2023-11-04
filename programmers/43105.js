// https://school.programmers.co.kr/learn/courses/30/lessons/43105

function solution(triangle) {
  for (let i = 1; i < triangle.length; i++) {
    for (let t = 0; t < triangle[i].length; t++) {
      triangle[i][t] += Math.max(
        triangle[i - 1][t - 1] ?? 0,
        triangle[i - 1][t] ?? 0
      );
    }
  }

  return Math.max(...triangle[triangle.length - 1]);
}
