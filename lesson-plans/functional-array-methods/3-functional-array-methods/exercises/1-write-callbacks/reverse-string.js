/**
 * reverses a string
 * @param {string} str - the string to reverse
 * @returns {string} the string, reversed
 */
// export const reverseString = (string) => {
// let newString = '';
// for (let i = string.length; i >= 0; i--) {
//   newString += string[i];
//   return newString;
// }

//

// };

export const reverseString = (str) => {
  // return str.split('').reverse().join('');
  const newString = str.split('').reverse().join('');
  return newString;
};
