'use strict';

exports.middle = function (list) {
  let length = 0;
  let link = list;

  while (link.next !== null) {
    length++
    link = link.next;
  }
    link = list;
    let half = ~~ (length / 2); //~~ not not
    while (half !==0) {
      half--;
      link = link.next;
    }
    return link;
}
