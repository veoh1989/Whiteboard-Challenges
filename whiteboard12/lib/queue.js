'use strict';

const Stack = require('./stack');
const Node = require('./node');

module.exports = class {
  constructor() {
    this.first = null;
    this.last = null;
    this.newOne = new Stack();
    this.newTwo = new Stack();
  }

  enqueue(value) {
    let node = new Node (value);

    this.newOne.last ? this.newOne.last.next = node : this.newOne.first = node;
    this.newOne.last = node;

    this.newTwo

    return this;
  }

  dequeue() {


    return this;
  }
};