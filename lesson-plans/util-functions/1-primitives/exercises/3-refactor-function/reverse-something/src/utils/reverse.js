/**
 * - Reverse the string
 *
 * @param {string} text - string to reverse
 *
 * @returns {string} - reversed string
 *
 */
export const reverse = (text = '') => {
  const reversedText = text.split('').reverse().join('');
  return reversedText;
};
