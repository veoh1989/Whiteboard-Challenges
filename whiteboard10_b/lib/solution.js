'use strict';

module.exports = (n, list) => {
  if(typeof n !== 'number') return null;
  let currentNode = list.head;
  let length = 0;

  while(currentNode.next !==null){
    length++;
    currentNode = currentNode.next;
  }
  if (n > length) return null;
  currentNode = list.head;
  let distance = length -n;
  while(distance > 0)  {
    distance--;
    currentNode = currentNode.next;
  }
  return currentNode;
};