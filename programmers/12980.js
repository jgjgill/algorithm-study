// https://school.programmers.co.kr/learn/courses/30/lessons/12980

function solution(n) {
  let answer = 0;

  while (n) {
    if (n % 2) {
      n--;
      answer++;
    } else {
      n /= 2;
    }
  }

  return answer;
}

function solution(n) {
  let answer = 0
  
  while(n > 0) {
      if (n % 2 === 1) {
          answer += 1
      }
      n =  Math.floor(n / 2)
  }
  
  return answer;
}