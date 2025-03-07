/**
 * returns true if a string is excited
 * (meaning it contains an "!")
 * @param {string} str - the string
 * @returns {boolean} is it excited?
 */
export const isExcited = (string) => {
  if (string.includes('!')) {
    return true;
  } else {
    return false;
  }
};
