// https://school.programmers.co.kr/learn/courses/30/lessons/87946

function solution(k, dungeons) {
  const set = new Set();
  let answer = 0;

  function getAnswer(k, index, count) {
    for (let i = 0; i < dungeons.length; i++) {
      if (k < dungeons[i][0] || set.has(i)) continue;

      set.add(i);
      getAnswer(k - dungeons[i][1], index + 1, count + 1);
      set.delete(i);
    }

    answer = Math.max(answer, count);
  }

  getAnswer(k, 0, 0);

  return answer;
}
