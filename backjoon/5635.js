// https://www.acmicpc.net/problem/5635

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  const n = Number(input[0]);
  const members = [];

  for (let i = 1; i < n + 1; i++) {
    const [name, day, month, year] = input[i].split(" ");

    const time =
      dayToSecond(Number(day)) +
      monthToSecond(Number(month)) +
      yearToSecond(Number(year));

    members.push([name, time]);
  }

  members.sort((a, b) => (a[1] < b[1] ? 1 : -1));

  return [members[0][0], members.at(-1)[0]].join("\n");

  function dayToSecond(day) {
    return day * 60 * 60 * 24;
  }

  function monthToSecond(month) {
    return month * 60 * 60 * 24 * 30;
  }

  function yearToSecond(year) {
    return year * 60 * 60 * 24 * 30 * 12;
  }
}

console.log(solution());
