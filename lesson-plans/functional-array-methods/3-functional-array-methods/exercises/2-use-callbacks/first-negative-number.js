/**
 * find the first negative number, returns undefined if there is none
 *  does not modify the array
 * @param {any[]} arr - the array of values
 * @returns {(number|undefined)} the first negative number
 */
export const firstNegativeNumber = (arr) => {
  const newArr = [...arr];
  return newArr.find((item) => {
    if (typeof item === 'number' && item < 0) {
      return true;
    }
    return false;
  });
};
