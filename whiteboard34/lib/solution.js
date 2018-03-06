'use strict';

const solution = module.exports = {};

solution.compare = function(treeOne, treeTwo) {
  if (typeof treeOne !== 'object' || typeof treeTwo !== 'object') return null;
  if ((treeOne.left && !treeTwo.left) || (!treeOne.left && treeTwo.left)) return false
  if ((treeOne.right && !treeTwo.right) || (!treeOne.right && treeTwo.right)) return false
  if (treeOne.left && treeTwo.left) return solution.compare(treeOne.left, treeTwo.left)
  if (treeOne.right && treeTwo.right) return solution.compare(treeOne.right, treeTwo.right)
  return true
};