// https://school.programmers.co.kr/learn/courses/30/lessons/12949

function solution(arr1, arr2) {
  const answer = new Array(arr1.length).fill().map(() => []);

  console.log(answer);
  for (let i = 0; i < arr1.length; i++) {
    for (let t = 0; t < arr2[0].length; t++) {
      let temp = 0;
      for (let q = 0; q < arr1[0].length; q++) {
        temp += arr1[i][q] * arr2[q][t];
      }
      answer[i][t] = temp;
    }
  }

  return answer;
}
