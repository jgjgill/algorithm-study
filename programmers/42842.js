// https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  const sum = brown + yellow;

  for (let height = 3; height <= sum / 2; height++) {
    const width = sum / height;

    if (sum % height) continue;
    if (height > width) continue;

    if ((height - 2) * (width - 2) === yellow) return [width, height];
  }
}
