'use strict';

const solution = module.exports = {};
const Sll = require ('../lib/sll');
const Stack = require('../lib/stack');

solution.dedupe = function(head) {
  if (typeof head !== 'object') return null;
  let newStack = new Stack();
  let newSLL = new Sll();
  let currentNode = head;

  while(currentNode) {
    if(!newStack.top || newStack.top !== currentNode.value) {
      newStack.push(currentNode.value);
      newSLL.insertEnd(currentNode.value);
    }
    currentNode = currentNode.next;
  }
  return newSLL;
};