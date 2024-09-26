// https://school.programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
  return numbers
    .map(String)
    .sort((a, b) => {
      if (a + b < b + a) return 1;
      if (a + b > b + a) return -1;
      if (a + b === b + a) return 0;
    })
    .join("")
    .replace(/^0*$/, "0");
}

function solution(numbers) {
  const answer = numbers
    .map(String)
    .sort((a, b) => {
      if (a + b < b + a) return 1;
      if (a + b > b + a) return -1;
      if (a + b === b + a) return 0;
    })
    .join("");
  return answer[0] === "0" ? "0" : answer;
}

function solution(numbers) {
  const answer = numbers.map(String).sort((a, b) => b + a - (a + b));

  return answer[0] === "0" ? "0" : answer.join("");
}

function solution(numbers) {
  numbers.sort(
    (a, b) => Number(String(b) + String(a)) - Number(String(a) + String(b))
  );

  return numbers[0] === 0 ? "0" : numbers.reduce((acc, cur) => acc + cur, "");
}
    
