// https://school.programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
  let answer = new_id.toLowerCase()

  answer = answer.match(/[0-9._\-a-z]/g).join("")

  answer = answer.replace(/[.]{2,}/g, ".")

  if (answer[0] === ".") {
    answer = answer.slice(1)
  }

  if (answer.at(-1) === ".") {
    answer = answer.slice(0, -1)
  }

  if (!answer.length) {
    answer += "a"
  }

  if (answer.length >= 16) {
    answer = answer.slice(0, 15)
  }

  if (answer.at(-1) === ".") {
    answer = answer.slice(0, -1)
  }

  while (answer.length <= 2) {
    answer += answer.at(-1)
  }

  return answer
}

function solution(new_id) {
  new_id = new_id
    .toLowerCase()
    .replace(/[^\w-._]/g, "")
    .replace(/[.]{2,}/g, ".")
  new_id = checkFourth(new_id)
  new_id = new_id.length === 0 ? "a" : new_id
  new_id = checkFourth(new_id.slice(0, 15))

  while (new_id.length <= 2) {
    new_id += new_id.at(-1)
  }

  return new_id

  function checkFourth(id) {
    if (id[0] === ".") id = id.slice(1)
    if (id.at(-1) === ".") id = id.slice(0, id.length - 1)
    return id
  }
}
