// https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  let answer = "";

  for (const item of s) {
    const check = item.charCodeAt(0);

    if (check === 32) {
      answer += " ";
      continue;
    }

    if (97 <= check && check <= 122) {
      answer +=
        122 < check + n
          ? String.fromCharCode(check + n - 26)
          : String.fromCharCode(check + n);
    } else {
      answer +=
        90 < check + n
          ? String.fromCharCode(check + n - 26)
          : String.fromCharCode(check + n);
    }
  }

  return answer;
}
