'use strict';

const Stack = require('./stack');

module.exports = class {
  constructor() {
    this.in = new Stack();
    this.out = new Stack();
  }

  enqueue(value) {
    if (value === null) return 'Cannot be null';
    this.in.push(value);
    return `${value} was added`;
  }

  dequeue() {
    if(!this.out.top){
      while(this.in.top) {
        this.out.push(this.in.pop());
      }
    }
    return this.out.pop();
  }
};