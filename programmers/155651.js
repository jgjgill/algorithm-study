// https://school.programmers.co.kr/learn/courses/30/lessons/155651

function solution(book_time) {
  const stack = [];
  let answer = 0;

  book_time = book_time
    .map((item) => {
      const start_temp = item[0].split(":").map(Number);
      const end_temp = item[1].split(":").map(Number);
      const start_time = start_temp[0] * 60 + start_temp[1];
      const end_time = end_temp[0] * 60 + end_temp[1] + 10;

      return [start_time, end_time];
    })
    .sort((a, b) => a[0] - b[0]);

  for (const check_book of book_time) {
    while (stack.at(-1) <= check_book[0]) stack.pop();

    stack.push(check_book[1]);
    stack.sort((a, b) => b - a);

    answer = Math.max(answer, stack.length);
  }

  return answer;
}

function solution(book_time) {
  const stack = [];
  let answer = 0;

  book_time = book_time
    .map(([start, end]) => {
      const [start_hours, start_minutes] = start.split(":").map(Number);
      const [end_hours, end_minutes] = end.split(":").map(Number);
      return [
        start_hours * 60 + start_minutes,
        end_hours * 60 + end_minutes + 10,
      ];
    })
    .sort((a, b) => a[0] - b[0]);

  for (const [start, end] of book_time) {
    while (stack.at(-1) <= start) {
      stack.pop();
    }

    stack.push(end);
    stack.sort((a, b) => b - a);
    answer = Math.max(answer, stack.length);
  }

  return answer;
}
