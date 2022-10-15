// https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  const rank = { 0: 6, 1: 6, 2: 5, 3: 4, 4: 3, 5: 2, 6: 1 };

  let zeroCount = 0;
  let check = 0;

  for (const lotto of lottos) {
    if (!lotto) zeroCount++;
    if (win_nums.includes(lotto)) check++;
  }

  return [rank[check + zeroCount], rank[check]];
}
