// https://www.acmicpc.net/problem/3036

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  const N = Number(input[0]);
  const rings = input[1].split(" ").map(Number);
  const answer = [];

  const getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);

  for (let i = 1; i < rings.length; i++) {
    const gcd = getGCD(rings[0], rings[i]);
    answer.push(rings[0] / gcd + "/" + rings[i] / gcd);
  }

  return answer.join("\n");
}

console.log(solution());
