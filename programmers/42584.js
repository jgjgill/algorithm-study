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

function solution(prices) {
  const answer = [];
  const stack = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length !== 0 && stack.at(-1)[0] > prices[i]) {
      const [_, index] = stack.pop();
      answer[index] = i - index;
    }

    stack.push([prices[i], i]);
  }

  while (stack.length !== 0) {
    const [_, index] = stack.pop();
    answer[index] = prices.length - 1 - index;
  }

  return answer;
}
