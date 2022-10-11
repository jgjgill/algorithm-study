// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  const set = new Set();
  let answer;

  nums.map((item) => set.add(item));

  answer = set.size > nums.length / 2 ? nums.length / 2 : set.size;

  return answer;
}
