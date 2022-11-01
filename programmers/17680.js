// https://school.programmers.co.kr/learn/courses/30/lessons/17680

function solution(cacheSize, cities) {
  const map = new Map();

  let answer = 0;

  if (!cacheSize) return cities.length * 5;

  for (let city of cities) {
    city = city.toLocaleLowerCase();

    if (map.has(city)) {
      map.delete(city);
      answer += 1;
    } else {
      if (map.size === cacheSize) {
        map.delete(map.keys().next().value);
      }

      answer += 5;
    }

    map.set(city);
  }

  return answer;
}
