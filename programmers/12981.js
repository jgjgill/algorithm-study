// https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
  const set = new Set();

  let number = 2;
  let turn = 1;
  let index = 1;
  let check = words[0].at(-1);

  set.add(words[0]);

  while (index < words.length) {
    const word = words[index];

    if (set.has(word)) return [number, turn];
    if (check !== word[0]) return [number, turn];

    number++;
    index++;
    check = word.at(-1);
    set.add(word);

    if (number > n) {
      turn++;
      number = 1;
    }
  }

  return [0, 0];
}
