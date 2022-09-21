const fs = require('fs')
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .split('\n')

const [N, M] = input[0].split(' ').map(Number)

function createHousesAndChickens() {
  const houses = []
  const chickens = []

  for (let i = 1; i <= N; i++) {
    for (let t = 1; t <= N; t++) {
      const node = Number(input[i].split(' ')[t - 1])

      if (node === 2) chickens.push({ x: i, y: t })
      if (node === 1) houses.push({ x: i, y: t })
    }
  }

  return [houses, chickens]
}

function calc(house, chicken) {
  return Math.abs(house.x - chicken.x) + Math.abs(house.y - chicken.y)
}

let answer = Infinity

function bt(houses, chickens, check, index, count) {
  if (count === M) {
    let sum = 0

    for (let i = 0; i < houses.length; i++) {
      let min = Infinity

      for (let t = 0; t < chickens.length; t++) {
        if (check[t]) {
          min = Math.min(min, calc(houses[i], chickens[t]))
        }
      }

      sum += min
    }

    answer = Math.min(answer, sum)
    return
  }

  for (let i = index; i < chickens.length; i++) {
    if (check[i]) continue

    check[i] = true
    bt(houses, chickens, check, i, count + 1)
    check[i] = false
  }
}

function solution() {
  const [houses, chickens] = createHousesAndChickens()
  const check = new Array(chickens.length).fill(false)

  bt(houses, chickens, check, 0, 0)

  return answer
}

console.log(solution())
