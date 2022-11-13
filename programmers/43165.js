// https://school.programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
  let count = 0;

  function getCount(index, check) {
    if (index === numbers.length) {
      if (check === target) count++;
      return;
    }

    getCount(index + 1, check + numbers[index]);
    getCount(index + 1, check - numbers[index]);
  }

  getCount(0, 0);

  return count;
}
