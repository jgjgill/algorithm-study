// https://www.acmicpc.net/problem/25206

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  let creditSum = 0;
  let gradeSum = 0;

  const gradeChange = {
    "A+": 4.5,
    A0: 4.0,
    "B+": 3.5,
    B0: 3.0,
    "C+": 2.5,
    C0: 2.0,
    "D+": 1.5,
    D0: 1.0,
    F: 0,
  };

  for (let i = 0; i < 20; i++) {
    const [name, credit, grade] = input[i].split(" ");

    if (grade === "P") continue;

    creditSum += Number(credit);
    gradeSum += Number(credit) * gradeChange[grade];
  }

  return gradeSum / creditSum;
}

console.log(solution());
