// https://www.acmicpc.net/problem/10825

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  const N = Number(input[0])
  const list = []

  for (let i = 1; i <= N; i++) {
    const student = input[i].split(' ')
    for (let t = 1; t < student.length; t++) {
      student[t] = Number(student[t])
    }

    list.push(student)
  }

  list.sort((a, b) => {
    if (a[1] !== b[1]) return b[1] - a[1]
    else if (a[2] !== b[2]) return a[2] - b[2]
    else if (a[3] !== b[3]) return b[3] - a[3]
    else {
      if (a[0] > b[0]) return 1
      else if (a[0] < b[0]) return -1
      else return 0
    }
  })

  return list.map((student) => student[0]).join('\n')
}

console.log(solution());
