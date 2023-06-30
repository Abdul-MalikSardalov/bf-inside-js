/**
 * - The function takes an array of strings and returns a new array with strings that include the second parameter
 *
 * @param {string} strings - input
 * @param {string} query - what to find
 *
 * @returns {array} array with new values
 *
 */
export const search = (strings = [], query = '') => {
  let newArr = [];
  for (let item of strings) {
    if (item.includes(query)) {
      newArr.push(item);
    }
  }
  return newArr;
};

// console.log(search(['malik', 'abc', 'def'], 'k'));
