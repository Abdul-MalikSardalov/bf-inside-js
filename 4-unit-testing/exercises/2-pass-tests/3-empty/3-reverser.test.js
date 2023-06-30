// #todo

'use strict';

/**
 * Reverse the string
 *
 *@param {string} stringToReverse - string to reverse
 *@ returns {string} reversed string
 *
 */
const reverser = (stringToReverse = '') => {
  let reversedString = stringToReverse.split('').reverse().join('');
  return reversedString;
};

describe('reverser: reverses a string', () => {
  it('reverses one letter', () => {
    const returned = reverser('a');
    expect(returned).toEqual('a');
  });
  it('reverses the empty string', () => {
    const returned = reverser('');
    expect(returned).toEqual('');
  });
  it('reverses words with punctuation', () => {
    const returned = reverser('hoy!');
    expect(returned).toEqual('!yoh');
  });
  it('reverses long strings', () => {
    const returned = reverser('!! How is LOUD ??');
    expect(returned).toEqual('?? DUOL si woH !!');
  });
  it('reverses one letter', () => {
    const returned = reverser('a');
    expect(returned).toEqual('a');
  });
  it('has a default parameter', () => {
    const returned = reverser();
    expect(returned).toEqual('');
  });
});
