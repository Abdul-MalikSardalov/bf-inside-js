/**
 *
 *
 *
 */
export const keepLongStrings = (arr = [], long = 5) => {
  const longArr = [];
  for (const element of arr) {
    if (element.length > long) {
      longArr.push(element);
    }
  }
  return longArr;
};

// console.log(
//   keepLongStrings(['apple', 'banana', 'orange', 'grape', 'kiwi', 'watermelon']),
// );
