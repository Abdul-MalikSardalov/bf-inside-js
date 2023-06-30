// #todo

/**
 * casts all array items to Number and removes NaN
 * @param {Array} arr - the array of items to coerce
 * @returns {Array} - a new array of number values
 */
// export const keepNumbery = (arr = []) => {
//   const newArr = arr.map((item) => Number(item));
//   return newArr;
// };

export const keepNumbery = (arr) => {
  const convertedArr = arr.map((item) => Number(item));
  const filteredArr = convertedArr.filter(
    (item) => typeof item === 'number' && !isNaN(item),
  );
  return filteredArr;
};
