// #todo

/**
 *
 */
export const longToUpper = (arr = [], long = 0) => {
  const checkedArr = [];
  for (let elem of arr) {
    if (elem.length >= long) {
      checkedArr.push(elem.toUpperCase());
    } else checkedArr.push(elem);
  }
  return checkedArr;
};
