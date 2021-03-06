'use strict';

exports.middle = function (list) {
  if (typeof list !== 'object') return null;
  let length = 0; //counter, set at zero
  let link = list; //point at at the current node

  while (link.next !== null) { //while there is a next node
    if(typeof link.value !== 'number' || link.value < 0) return null;
    length++ //add to counter
    link = link.next; //move to next node
  }
    link = list; //go back to the start
    let half = ~~ (length / 2); //~~ not not //half of the list?
    while (half !==0) {//while half is not equal to zero
      half--; //count down
      link = link.next; //move to next node
    }
    return link; //return node
}
