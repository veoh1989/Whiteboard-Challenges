'use strict';

const Stack = require('./stack');

module.exports = class {
  constructor() {
    this.in = new Stack();
    this.out = new Stack();
  }

  enqueue(value) {
    this.in.push(value);
    return `${value} was added`;
  }

  dequeue() {
    if(!this.out.head){
      while(this.head) {
        this.out.push(this.in.pop());
      }
    }
    return this.out.pop();
  }
};