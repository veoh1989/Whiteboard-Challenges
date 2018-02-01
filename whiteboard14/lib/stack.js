'use strict';

const Node = require('./node');

module.exports = class {
  constructor(maxSize=1048) {
    this.top = null;
    this.maxSize = maxSize;
    this.size = 0;
  }
  push(value) {
    if(this.size === this.maxSize) throw new Error('Stack overflow!');

    let node = new Node(value);

    node.next = this.top;
    this.top = node;
    this.size++;
    return this.top;
    //Big-O: O(1)
  }

  pop() {
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.size--;

    return temp;
    //Big-O: O(1)
  }

  peek() {
    return this.top;
    //Big-O: O(1)
  }
};