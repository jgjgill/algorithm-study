// https://www.acmicpc.net/problem/13144

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  const N = Number(input[0])
  const list = input[1].split(' ').map(Number)
  const set = new Set()

  let right = 0
  let answer = 0


  for (let left = 0; left < N; left++) {
    
    while (right < N && !set.has(list[right])) {
      set.add(list[right])
      right += 1
    }
    
    answer += right - left

    set.delete(list[left])
  }

  return answer
}

console.log(solution());
