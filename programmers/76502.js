// https://school.programmers.co.kr/learn/courses/30/lessons/76502

function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const stack = [];

    for (let t = 0; t < s.length; t++) {
      stack.push(s[t]);

      if (
        (stack.at(-2) === "[" && stack.at(-1) === "]") ||
        (stack.at(-2) === "{" && stack.at(-1) === "}") ||
        (stack.at(-2) === "(" && stack.at(-1) === ")")
      ) {
        stack.pop();
        stack.pop();
      }
    }
    if (!stack.length) answer++;

    s = s.slice(1) + s[0];
  }

  return answer;
}
