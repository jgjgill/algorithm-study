// https://leetcode.com/problems/greatest-common-divisor-of-strings/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  const [short, long] = [str1, str2].sort((a, b) => a.length - b.length)

  for (let i = short.length; i > 0; i--) {
    const check = short.slice(0, i)
    const shortCheck = short.split(check).join("").length === 0
    const longCheck = long.split(check).join("").length === 0

    if (shortCheck && longCheck) return check
  }

  return ""
}
