'use strict';

const Node = require('./nd');

module.exports = (listA, listB) => {
  if (!listA || !listB) throw new Error('Error');

  let in_a = {};
  let newlist = null;
  for(let node = listA; node !== null; node = node.next) {
    in_a[node.value] = true;
  }
  for (let node = listB; node; node = node.next) {
    if (in_a[node.value]) {
      let n = new Node(node.value);
      n.next = newlist;
      newlist = n;
    }
  }
  return newlist;
};