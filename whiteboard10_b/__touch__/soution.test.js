'use strict';

const solution = require('../lib/solution');

describe('Solution Module', () => {
  describe('#checkBraces', () => {
    it('should return the correct output', () => {
      expect(solution.checkBraces('{{}{}{}}}')).toBe('Incorrect braces.');
      expect(solution.checkBraces('{{}{}{}}')).toBe('Your braces are correct.');
    });

    it('type of argument should be a string', () => {
      expect(solution.checkBraces(2)).toBe('Invalid argument.');
      expect(solution.checkBraces('{}')).toBe('Your braces are correct.');
    });

    it('string in argument should contain braces', () => {
      expect(solution.checkBraces('just string')).toBe('Your string did not have any braces.' );
      expect(solution.checkBraces('{}')).toBe('Your braces are correct.');
    });
  });
});