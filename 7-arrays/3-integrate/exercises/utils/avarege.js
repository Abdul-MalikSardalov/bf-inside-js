export const theAverage = (arrWithNumbers) => {
return (arrWithNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
)) / arrWithNumbers.length

}



// sum = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0,
// );
// const theAverage = sum / numbers.length;
