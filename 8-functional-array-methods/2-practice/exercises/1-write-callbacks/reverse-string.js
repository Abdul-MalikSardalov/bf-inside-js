// #todo

/**
 * reverses a string
 * @param {string} str - the string to reverse
 * @returns {string} the string, reversed
 */
export const reverseString = (str = '') => {
  const reversed = str.split('').reverse().join('');
  return reversed;
};
