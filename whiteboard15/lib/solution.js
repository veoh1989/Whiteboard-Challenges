'use strict';

const Queue = require('../lib/queue');

const solution = module.exports = {};

solution.tree = function(root) {
  let current = null;
  let newQ = new Queue();
  let result = [];
  newQ.enqueue(root);

  while(newQ.back) {
    current.newQ.dequeue();
    if(!current.value.children) result.push(current.value);
    current.value.children.map(child => newQ.enqueue(child));
  }
};