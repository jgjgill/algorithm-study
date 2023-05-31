// https://www.acmicpc.net/problem/1620

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt"
const input = fs.readFileSync(filePath).toString().split("\n")

function solution() {
  const [N, M] = input[0].split(" ").map(Number)
  const pokemons_number = [null]
  const pokemons_name = {}
  const answer = []
  let index = 1

  for (let i = 1; i <= N; i++) {
    const pokemon = input[index++].trim()

    pokemons_number.push(pokemon)
    pokemons_name[pokemon] = i
  }

  for (let i = 0; i < M; i++) {
    const check = input[index++].trim()
    const temp = isNaN(Number(check)) ? pokemons_name[check] : pokemons_number[Number(check)]
    
    answer.push(temp)
  }

  return answer.join('\n')
}

console.log(solution())
