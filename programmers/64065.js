// https://school.programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  const set = new Set();
  const checks = s.split(/\B,/g).sort((a, b) => a.length - b.length);

  for (let check of checks) {
    const list = check.replace(/{|}/g, "").split(",");

    for (const item of list) {
      set.add(Number(item));
    }
  }

  return [...set];
}
