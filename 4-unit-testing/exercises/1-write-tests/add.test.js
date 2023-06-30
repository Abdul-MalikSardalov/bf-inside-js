// #todo

'use strict';

/**
/**
 * Adds two numbers together.
 *
 * @param {number} [x=0] - The left number.
 * @param {number} [y=0] - The right number.
 * @returns {number} The sum of x and y.
 */
const sumTwoNumbers = (num1 = 0, num2 = 0) => {
  return num1 + num2;
};

describe('sumTwoNumbers', () => {
  describe('when both numbers are positive', () => {
    it('should return the correct sum', () => {
      const expected = 10;
      const actual = sumTwoNumbers(4, 6);
      expect(actual).toEqual(expected);
    });
    // ...
  });
  describe('when one number is negative', () => {
    it('should return the correct sum', () => {
      const expected = -2;
      const actual = sumTwoNumbers(-3, 1);
      expect(actual).toEqual(expected);
    });
    // ...
  });
  // ...
});

