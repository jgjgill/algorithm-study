// https://www.acmicpc.net/problem/17413

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  let S = input[0]
  let tag_active = false
  let answer = ""
  let temp_tag = ""
  let temp_word = ""

  for (const char of S) {
    if (tag_active) {
      if (char === " ") temp_tag += char
      else if (char === ">") {
        answer += temp_tag + char
        temp_tag = ""
        tag_active = false
      } else temp_tag += char
    } else {
      if (char === " ") {
        answer += reverseWord(temp_word) + " "
        temp_word = ""
      } else if (char === "<") {
        answer += reverseWord(temp_word)
        temp_word = ""
        temp_tag += char
        tag_active = true
      } else temp_word += char
    }
  }

  if (temp_tag !== "") answer += temp_tag
  if (temp_word !== "") answer += reverseWord(temp_word)

  return answer

  function reverseWord(word) {
    return word.split("").reverse().join("")
  }
}

console.log(solution())
