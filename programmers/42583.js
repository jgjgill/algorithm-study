// https://school.programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
  const queue = []
  const stack = []

  let weight_check = 0
  let truck_index = 0
  let time = 0

  while (stack.length !== truck_weights.length) {
    time += 1

    if (queue[0] && time - queue[0][1] === bridge_length) {
      const pass_truck = queue.shift()

      weight_check -= pass_truck[0]
      stack.push(pass_truck)
    }

    if (weight_check + truck_weights[truck_index] <= weight) {
      const cross_truck = truck_weights[truck_index]

      weight_check += cross_truck
      queue.push([cross_truck, time])

      truck_index += 1
    }
  }

  return time
}
