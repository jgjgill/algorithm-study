// https://school.programmers.co.kr/learn/courses/30/lessons/42584

function solution(prices) {
  const stack = [];
  const answer = [];

  prices.forEach((price, index) => {
    while (stack.length !== 0 && stack.at(-1)[0] > price) {
      answer[stack.at(-1)[1]] = index - stack.at(-1)[1];
      stack.pop();
    }

    stack.push([price, index]);
  });

  while (stack.length !== 0) {
    answer[stack.at(-1)[1]] = prices.length - 1 - stack.at(-1)[1];
    stack.pop();
  }

  return answer;
}
