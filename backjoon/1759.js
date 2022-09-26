// https://www.acmicpc.net/problem/1759

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const [L, C] = input[0].split(" ").map(Number);
const alphabet = input[1].split(" ").sort();
const check = new Array(C).fill(false);
const vowels = ["a", "e", "i", "o", "u"];
const vowelCheck = [];
const consonantCheck = [];

function bt(count, index) {
  if (count === L) {
    if (!vowelCheck.length || consonantCheck.length < 2) return;

    let answer = "";
    alphabet.map((item, index) => {
      if (check[index]) {
        answer += item;
      }
    });

    console.log(answer);
    return;
  }

  for (let i = index; i < alphabet.length; i++) {
    check[i] = true;
    if (vowels.includes(alphabet[i])) {
      vowelCheck.push(alphabet[i]);
      bt(count + 1, i + 1);
      vowelCheck.pop();
    } else {
      consonantCheck.push(alphabet[i]);
      bt(count + 1, i + 1);
      consonantCheck.pop();
    }
    check[i] = false;
  }
}

function solution() {
  bt(0, 0);
}

solution();
