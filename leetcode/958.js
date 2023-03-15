// https://leetcode.com/problems/check-completeness-of-a-binary-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function (root) {
  if (root === null || root.length === 0) return true
  const queue = [root]
  let check = false

  while (queue.length !== 0) {
    const current = queue.shift()

    if (current === null) check = true
    else {
      if (check) return false
      queue.push(current.left)
      queue.push(current.right)
    }
  }

  return true
}
