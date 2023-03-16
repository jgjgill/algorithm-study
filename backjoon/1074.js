const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const [N, r, c] = input[0].split(" ").map(Number)
  
  let answer
  let count = 0

  divide(0, 0, Math.pow(2, N))

  return answer
   
  function divide(x, y, size) {
    if (r === x && c === y) {
      answer = count
      return
    }
    if (r < x + size && c < y + size && r >= x && c >= y) {
      const resize = Math.floor(size / 2)

      divide(x, y, resize)
      divide(x, y + resize, resize)
      divide(x + resize, y, resize)
      divide(x + resize, y + resize, resize)
    } else count += size * size
  }
}

console.log(solution())
