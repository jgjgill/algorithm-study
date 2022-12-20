// https://leetcode.com/problems/keys-and-rooms/

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const check = Array.from({ length: rooms.length }, () => false)

  dfs(0)

  function dfs(index) {
    check[index] = true

    for (const key of rooms[index]) {
      if (check[key]) continue
      dfs(key)
    }
  }

  return check.every(Boolean)
}
