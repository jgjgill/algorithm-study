// https://www.acmicpc.net/problem/15970

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', function(line){
  input.push(line);
}).on("close", function(){
  const N = Number(input[0])
  const list = []
  const check = {}
  let answer = 0

  for (let i = 1; i <= N; i++) {
    const item = input[i].trim().split(' ').map(Number)
    list.push(item)
  }

  for (const [dir, color] of list) {
    if (check[color] === undefined) check[color] = [dir]
    else check[color].push(dir)
  }

  for (const key in check) {
    const dir_list = check[key].sort((a, b) => a - b)
    
    for (let i = 0; i < dir_list.length; i++) {
      if (i === 0) answer += dir_list[i + 1] - dir_list[i]
      else if (i === dir_list.length - 1) answer += dir_list[i] - dir_list[i - 1]
      else answer += Math.min(dir_list[i] - dir_list[i - 1], dir_list[i + 1] - dir_list[i])
    }
  }

  console.log(answer) 
  process.exit();
});
