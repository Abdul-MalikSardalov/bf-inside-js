/**
 * joins two strings with a comma and a space
 * @param {string} acc - the left string
 * @param {string} str - the right string
 * @returns {string} the strings, joined
 */
export const joinWithComma = (string1, string2) => {
  const separeted = string1 + ', ' + string2;
  return separeted;
};
