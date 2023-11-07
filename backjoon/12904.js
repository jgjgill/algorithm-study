// https://www.acmicpc.net/problem/12904

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  const S = input[0].split("");
  const T = input[1].split("");

  let answer = 0;

  while (true) {
    if (S.length === T.length) {
      if (S.join("") === T.join("")) {
        answer = 1;
      }

      break;
    }

    if (T.at(-1) === "A") {
      T.pop();
    } else {
      T.pop();
      T.reverse();
    }
  }

  return answer;
}

console.log(solution());
