// #todo

import { someLong } from './some-long.js';
describe('someLong: checks if there are strings longer than the specified length', () => {
  it('returns true if there is a string longer than the specified length', () => {
    const strings = ['apple', 'banana', 'orange'];
    const long = 6;
    expect(someLong(strings, long)).toBe(true);
  });

  it('returns false if all strings are shorter than the specified length', () => {
    const strings = ['apple', 'banana', 'orange'];
    const long = 7;
    expect(someLong(strings, long)).toBe(false);
  });

  it('returns false if the input array is empty', () => {
    const strings = [];
    const long = 5;
    expect(someLong(strings, long)).toBe(false);
  });
});
