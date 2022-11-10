// https://school.programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
  const stack = [];
  let index = 0;

  while (true) {
    let check = true;

    for (let i = index + 1; i < priorities.length; i++) {
      if (priorities[index] < priorities[i]) {
        if (index === location) location = priorities.length;

        priorities.push(priorities[index]);
        check = false;
        break;
      }
    }

    if (check) stack.push(priorities[index]);
    if (index === location) return stack.length;

    index++;
  }
}
