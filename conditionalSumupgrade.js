// original student code 
// const conditionalSum = function(values, condition) {
//   if (condition === "odd") {
//     let counterOdd = 0;
//     for (let i = 0; i < values.length; i++) {
//       if (values[i] % 2 !== 0) {
//         counterOdd += values[i];
//       }
//     }
//     return counterOdd;
//   }
//   // Parallel setup for even 
//   if (condition === "even") {
//     let counterEven = 0;
//     for (let i = 0; i < values.length; i++) {
//       if (values[i] % 2 === 0) {
//         counterEven += values[i];
//       }
//     }
//     return counterEven;
//   }
// };

const conditionalSum = function (values, condition) { 
  let answer = 0;
  for (let value of values) {
    switch (condition) {
      case "even":
        answer += value % 2 === 0 ? value : 0;
        break;
      case "odd":
        answer += value % 2 !== 0 ? value : 0;
        break;
    }
  }
  return answer;
}
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));