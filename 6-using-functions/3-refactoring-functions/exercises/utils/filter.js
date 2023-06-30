/**
 * Removes the specified characters from a string and returns a new string
 *
 * @param {string} new line - The string from which to remove the specified characters
 * @param {string} removeThese - characters to be removed from the string
 * @returns {string} new string
 */
// export const filter = (toFilter = '', removeThese = '') => {

// };
export const filter = (toFilter = '', removeThese = '') => {
  const newArr = toFilter.split('');

  const rightArray = newArr.filter((char) => !removeThese.includes(char.toLowerCase()));

  const finalResult = rightArray.join('');

  return finalResult;
};
