let lastIndexOf = function (array, value) {
  let output = 0;
  let i = array.length - 1;
  while (i >= 0) {
    if (array[i] === value) {
      return i;
    }
    i--;
  }
  output = -1;
  return output;
}
console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

// student original code
// let lastIndexOf = function (array, value) {
//   let output = 0;
//   for (let i = array.length - 1; i >= 0; i--) {
//     if (array[i] === value) {
//       return i;
//     }
//     output = i;
//   } return output;
// }
// console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
// console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
// console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
// console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
// console.log(lastIndexOf([], 3), "=?", -1);