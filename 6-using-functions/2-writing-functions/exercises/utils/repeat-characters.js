/**
 * Returns a new string like the original one but with each character repeated.
 *
 * @param {string} [str = ''] - A string to repeat each character.
 * @param {number} [num = 0] - How many times to repeat each character.
 * @returns {string} The original text with each character repeated.
 */
export const repeatCharacters = (str = '', num = 1) => {
  let newString = '';
  for (let character of str){
    newString += character.repeat(num);
  }
  return newString;
};


