/**
 * Returns a new string with only the given characters left in it.
 *
 * @param {string} [text = ''] - Some text to remove characters from.
 * @param {string} [characters = ''] - The characters to keep.
 * @returns {string} Text with only the given characters still in it.
 */
export const keepCharacters = (text = '', characters = '') => {
  let result = '';
  for (let char of text) {
    if (characters.includes(char)) {
      result += char;
    }
  }
  return result;
};
