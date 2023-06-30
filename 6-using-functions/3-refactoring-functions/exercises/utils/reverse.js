/**
 * - the function reverses the given string
 *
 * @param {string} text - string to reverse
 *
 * @returns {string} reversed string
 *
 */
export const reverse = (text = '') => {
  let newSstring = text.split('').reverse().join('');
  return newSstring;
};
