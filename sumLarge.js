const sumLargestNumbers = function (data) {
  let bigOne = 0;
  let bigTwo = 0;
  for (let i = 0; i < data.length; i++) {
    if (bigOne < data[i]) {
      bigTwo = bigTwo > bigOne ? bigTwo : bigOne;
      bigOne = data[i];
    } else if (bigTwo < data[i]){
      bigTwo = data[i];
    }
  }
  return bigOne + bigTwo;
}

arr = [ 78, 45, 100, 1 , 4, 8, 90, 78, 99];

console.log(sumLargestNumbers(arr));

// original student code
// const sumLargestNumbers = function (data) {
//   let bigOne = 0;
//   let bigTwo = 0;
//   for (let i = 0; i < data.length; i++) {
//     if (data[i] > bigOne && data[i] !== bigTwo) {
//       bigOne = data[i];
//     }
//     for (let i = 0; i < data.length; i++) {
//       if (data[i] > bigTwo ) {
//         bigTwo = data[i];
//       }
//     }
//   }
//   return bigOne + bigTwo;
// }