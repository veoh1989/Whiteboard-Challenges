'use strict';

module.exports = (n) => {
  if(typeof n !== 'number') return null;
  let currentNode = this.head;
  let length = 0;

  while(currentNode !==null){
    length++;
    currentNode = currentNode.next;
  }
  if (n > length) return null;
  currentNode = this.head;
  let distance = length -n;
  while(distance > 0)  {
    distance--;
    currentNode = currentNode.next;
  }
  return currentNode;
};