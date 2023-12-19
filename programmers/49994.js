// https://school.programmers.co.kr/learn/courses/30/lessons/49994

function solution(dirs) {
  const check = {};

  let answer = 0;
  let x = 0;
  let y = 0;

  for (const dir of dirs) {
    let checkX = x;
    let checkY = y;

    if (dir === "U" && y < 5) {
      checkY += 0.5;
      y++;
    }
    if (dir === "L" && x > -5) {
      checkX -= 0.5;
      x--;
    }
    if (dir === "R" && x < 5) {
      checkX += 0.5;
      x++;
    }
    if (dir === "D" && y > -5) {
      checkY -= 0.5;
      y--;
    }

    if (check[checkX.toString() + checkY.toString()]) continue;
    if (x === checkX && y === checkY) continue;

    check[checkX.toString() + checkY.toString()] = true;
    answer++;
  }

  return answer;
}

function solution(dirs) {
  const now = [0, 0];
  const commands = { U: [1, 0], D: [-1, 0], R: [0, 1], L: [0, -1] };
  const check = {};
  let count = 0;

  for (let i = 0; i < dirs.length; i++) {
    const change = commands[dirs[i]];
    const next = [now[0] + change[0], now[1] + change[1]];
    const check_path = now.join("") + next.join("");

    if (next[0] < -5 || next[1] < -5 || next[0] > 5 || next[1] > 5) {
      continue;
    }

    if (!(check_path in check)) {
      count += 1;
      check[check_path] = true;
      check[next.join("") + now.join("")] = true;
    }

    now[0] = next[0];
    now[1] = next[1];
  }

  return count;
}
