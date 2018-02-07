'use strict';

const Queue = require('./queue');
const solution = module.exports = {};

solution.findLarge = function(tree) {
  if (typeof tree !== 'object') return null;
  let current = null;
  let newQ = new Queue();
  let topParent = null;
  let mostChildrenSeen = 0;
  newQ.enqueue(tree);

  while(newQ.back) {
    current = newQ.dequeue();
    if (current.children.length > mostChildrenSeen) {
      topParent = current;
      mostChildrenSeen = current.children.length;
    }
    current.children.map(child => newQ.enqueue(child));
  }
  return topParent;
};