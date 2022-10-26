// https://school.programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  let count = 1;
  let left = 0;
  let right = people.length - 1;

  people.sort((a, b) => a - b);

  let check = limit - people[right--];

  while (left <= right) {
    if (people[left] <= check) {
      check -= people[left++];
    } else {
      check = limit - people[right--];
      count++;
    }
  }

  return count;
}
