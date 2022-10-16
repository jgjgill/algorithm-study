// https://school.programmers.co.kr/learn/courses/30/lessons/131705

let count = 0;

function bt(number, index, sum, check) {
  if (check === 3) {
    if (sum === 0) count++;
    return;
  }

  for (let i = index; i < number.length; i++) {
    check++;
    bt(number, i + 1, sum + number[i], check);
    check--;
  }
}

function solution(number) {
  bt(number, 0, 0, 0);

  return count;
}
