// https://leetcode.com/problems/watering-plants/

/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
  const reset = capacity
  let answer = 0

  for (let i = 0; i < plants.length; i++) {
    if (capacity < plants[i]) {
      capacity = reset
      answer += 2 * i
    }
    
    capacity -= plants[i]
    answer += 1
  }
  
  return answer
};