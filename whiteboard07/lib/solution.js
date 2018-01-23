'use strict';

exports.circle = function (list) {
  if(typeof list !== 'object') return null;
  let slow = list, fast = list;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};