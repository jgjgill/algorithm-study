// https://school.programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
  const answer = [];
  const check = {};

  for (let i = 0; i < record.length; i++) {
    const [type, id, nickname] = record[i].split(" ");

    if (type !== "Leave") check[id] = nickname;
    if (type !== "Change") answer.push([type, id]);
  }

  for (let i = 0; i < answer.length; i++) {
    const nickname = check[answer[i][1]];

    answer[i] =
      answer[i][0] === "Enter"
        ? `${nickname}님이 들어왔습니다.`
        : `${nickname}님이 나갔습니다.`;
  }

  return answer;
}
