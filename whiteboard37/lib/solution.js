'use strict';

const SLL = require('../lib/sll.js');

const traverse = (node, callback) => {
  if (node) callback(node);
  if (node && node.left) traverse(node.left, callback);
  if (node && node.right) traverse(node.right, callback);
};

module.exports = (tree) => {
  if (typeof tree !== 'object') return null;

  let arr = [];
  let list = new SLL;

  traverse(tree.root, node => arr.push(node.value));

  arr.sort().map(x => list.insertEnd(x));

  return list;
};