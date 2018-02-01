'use strict';

const solution = require('../lib/solution.js');
require('jest');
const Sll = require ('../lib/sll');

let test1 = new Sll();
test1.insertEnd(1);
test1.insertEnd(2);
test1.insertEnd(2);
test1.insertEnd(3);
test1.insertEnd(2);

let correct = {head: {next: {next: {next: {next: {next: null, value: 2}, value: 3}, value: 2}, value: 2}, value: 1}};

let test2 = new Sll();
test2.insertEnd(1);
test2.insertEnd(2);
test2.insertEnd(2);
test2.insertEnd(3);

let correct2 = {head: {next: {next: {next: {next: null, value: 3}, value: 2}, value: 2}, value: 1}};

describe('#solution module', function() {
  it('should have an input', function() {
    expect(solution.dedupe('hello')).toBeNull();
    expect(solution.dedupe(test1)).toBeInstanceOf(Object);
  });
  it('should be correct output', function() {
    expect(solution.dedupe(test2.head)).toEqual(correct2);
  });
  it('only remove consecutive duplicates', function() {
    expect(solution.dedupe(test1.head)).toEqual(correct);
  });
});