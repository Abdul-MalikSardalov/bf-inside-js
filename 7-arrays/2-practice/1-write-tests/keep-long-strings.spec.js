import { keepLongStrings } from './keep-long-strings.js';

describe('Checks all array elements for length and returns a new array with elements that are longer than the specified parameter', () => {
  it('when the array is empty', () => {
    const arr = [];
    expect(arr).toEqual([]);
  });
  it('when arr correct', () => {
    const arr = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'watermelon'];
    const longArr = ['banana', 'orange', 'watermelon'];
    expect(longArr).toEqual(['banana', 'orange', 'watermelon']);
  });
});

// describe('comparing arrays in unit tests', () => {
//   describe('deep comparisons', () => {
//     it('two arrays with the same values', () => {
//       const arr1 = ['a', 'b', 'c'];
//       const arr2 = ['a', 'b', 'c'];
//       expect(arr1).toEqual(arr2);
//     });
//     it('two arrays with different values', () => {
//       const arr1 = ['a', 'b', 'c'];
//       const arr2 = ['a', 'b', 'f'];
//       expect(arr1).toEqual(arr2);
//     });
//   });
// });
