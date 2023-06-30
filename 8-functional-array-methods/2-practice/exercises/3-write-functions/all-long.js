// #todo

/**
 * - Checks the strings in the array for equality to the specified length
 *
 * @param {array} strings - array with strings
 * @param {number} long - specified length
 *
 * @returns (bollean) - true if correct else false
 */
export const allLong = (strings = [], long = 0) => {
  const rightArray = strings.every((item) => item.length === long);
  if (rightArray) {
    return true;
  } else return false;
};
