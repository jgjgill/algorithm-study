// https://leetcode.com/problems/build-an-array-with-stack-operations/

/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  const answer = [];
  let index = 0;

  for (let i = 1; i <= n; i++) {
    if (i > target.at(-1)) return answer;

    if (target[index] === i) {
      answer.push("Push");
      index += 1;
    } else {
      answer.push("Push");
      answer.push("Pop");
    }
  }

  return answer;
};
