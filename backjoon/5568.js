// https://www.acmicpc.net/problem/5568

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const n = Number(input[0])
  const k = Number(input[1])
  const cards = []
  const selected_cards = []
  const set = new Set()
  const indexs = new Set()
  let answer = 0

  for (let i = 2; i < 2 + n; i++) {
    cards.push(input[i].trim())
  }

  bt(0)

  function bt(index) {
    if (k === selected_cards.length) {
      const card_number = selected_cards.join("")
      if (!set.has(card_number)) {
        answer += 1
        set.add(card_number)
      }
      return
    }

    for (let i = index; i < n; i++) {
      if (indexs.has(i)) continue

      selected_cards.push(cards[i])
      indexs.add(i)
      bt(0)
      selected_cards.pop()
      indexs.delete(i)
    }
  }

  return answer
}

console.log(solution())
