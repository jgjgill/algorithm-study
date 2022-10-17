// https://school.programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  const answer = new Array(n).fill("");

  for (let i = 0; i < n; i++) {
    const a = arr1[i].toString(2).padStart(n, 0);
    const b = arr2[i].toString(2).padStart(n, 0);

    for (let t = 0; t < n; t++) {
      answer[i] += a[t] === "1" || b[t] === "1" ? "#" : " ";
    }
  }

  return answer;
}
