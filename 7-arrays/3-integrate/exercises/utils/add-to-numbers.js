/**
 * Creates a new array with the same length as the argument
 *  `toAdd` has been added to each element in the new array.
 *
 * @param {number[]} [numbers=[]] - An array of numbers.
 * @param {number} [toAdd=0] - The number to add to each array item.
 * @returns {number[]} A new array with one entry per `numbers`.
 */
export const addToNumbers = (numbers = [], toAdd = 0) => {
  const result = [];
  for (const number of numbers) {
    const nextNumber = number + toAdd;
    result.push(nextNumber);
  }
  return result;
};

// find-average.js
export const theAverage = (arr = []) => {
  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  const result = sum / arr.length;
  return result;
};

// search-inputs.js
export const findTheCharacter = (arr = [], character = '') => {
  let finalArr = [];
  for (let char of arr) {
    if (char.includes(character)) {
      finalArr.push(char);
    }
  }
  return finalArr;
};
