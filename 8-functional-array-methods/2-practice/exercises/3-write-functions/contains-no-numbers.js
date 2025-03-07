// #todo

/**
 * returns true if no values are numbers, otherwise returns false
 * does not modify the argument array
 * @param {Array} arr - the array of values to filter
 * @returns {Array} - a new array with no strings
 */
export const containsNoNumbers = (arr = []) => {
  const checkArr = arr.every((item) => typeof item !== 'number');
  return checkArr ? true : false;
};
