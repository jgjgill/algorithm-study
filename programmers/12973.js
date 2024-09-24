// https://school.programmers.co.kr/learn/courses/30/lessons/12973

function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length && stack.at(-1) === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length ? 0 : 1;
}


function solution(s) {
  const stack = []
  
  for (let char of s) {        
      if (stack.length > 0 && stack.at(-1) === char) {
          stack.pop()
      } else {
          stack.push(char)
      }
  }

  
  return stack.length === 0 ? 1 : 0
}