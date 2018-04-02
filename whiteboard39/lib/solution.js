'use strict';
// Write a function that takes a binary search tree as an argument. The tree isn't necessarily balanced. Return the value of the node that is furthest from the root of the tree in value.

// Stretch: Instead, return the value of the node that is furthest from the root of the tree in number of steps away.

const traverse = (node, callback) => {
  if (node && node.left) traverse(node.left, callback);
  if (node) callback(node);
  if (node && node.right) traverse(node.right, callback);
};

module.exports = (tree) => {
  traverse(tree.root, function(node) {

  })
};

// Take two global variable as “deepestlevel” and “value“.
// starting with level=0, Do the inorder traversal and whenever you go down one level ( root.left OR root.right), increase the level by 1.
// Keep checking if deepestlevel < level, if yes then update the “deepestlevel ” and “value “.
// At the end return “value“, which will the deepest node value.

// public class DeepestNode {
// 	int deepestlevel;
// 	int value;

// 	public int Deep(Node root) {
// 		find(root, 0);
// 		return value;
// 	}

// 	public void find(Node root, int level) {
// 		if (root != null) {
// 			find(root.left, ++level);
// 			if (level > deepestlevel) {
// 				value = root.data;
// 				deepestlevel = level;
// 			}
// 			find(root.right, level);
// 		}
// 	}
