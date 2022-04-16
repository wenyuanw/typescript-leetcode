/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/*  
 一个树是另一个树的子树，则
 要么这两个树相等
 要么这个树是左树的子树
 要么这个树是右树的子树 
 参考以下第 100 题 「相同的树」
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true
  if (p === null) return false
  if (q === null) return false
  if (p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  } else {
    return false
  }
};

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {

};