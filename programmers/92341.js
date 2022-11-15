// https://school.programmers.co.kr/learn/courses/30/lessons/92341

function solution(fees, records) {
  const checkTime = {};
  const resultTime = {};
  const answer = [];

  for (let i = 0; i < records.length; i++) {
    const [time, number, type] = records[i].split(" ");
    const hours = Number(time[0] + time[1]);
    const minutes = Number(time[3] + time[4]);

    if (checkTime[number] !== undefined) {
      resultTime[number] += hours * 60 + minutes - checkTime[number];
      delete checkTime[number];
    } else {
      checkTime[number] = hours * 60 + minutes;

      if (!resultTime[number]) resultTime[number] = 0;
    }
  }

  for (const key in checkTime) {
    resultTime[key] += 23 * 60 + 59 - checkTime[key];
  }

  for (const key in resultTime) {
    const unitTime = resultTime[key] - fees[0];
    const priceCheck =
      unitTime <= 0
        ? fees[1]
        : fees[1] + Math.ceil(unitTime / fees[2]) * fees[3];

    answer.push([Number(key), priceCheck]);
  }

  return answer.sort((a, b) => a[0] - b[0]).map((item) => item[1]);
}
