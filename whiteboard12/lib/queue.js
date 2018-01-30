'use strict';

const Stack = require('./stack');

module.exports = function Queue() {
  let inbox = new Stack();
  let outbox = new Stack();

  this.enqueue = function() {
    inbox.push.apply(inbox, arguments);
  };

  this.dequeue = function() {
    if (outbox.size() === 0) {
      while (inbox.size())
        outbox.push(inbox.pop());
    }
    return outbox.pop();
  };

  this.size = function(){
    return inbox.size() + outbox.size();
  };

  this.peek = function() {
    return outbox.peek();
  };
};