// Code of the lighthouse student needing help
//  const judgeVegetable = function (vegetables, metric) {
//   let myArray = [];
//   console.log("Start", myArray);
//   for (let i = 0; i < vegetables.length; i++) {
//     myArray.push(vegetables[i][metric]);
//     console.log("push", myArray);
//   myArray.sort();
//   console.log("sort", myArray);
//   console.log("compare", vegetables[i][metric], myArray[0]);
//   if(vegetables[i][metric] === myArray[0]) { // this quit prematurely
//     return vegetables[i].submitter;
//     }
//   }
//   console.log("End", myArray);
// }

// Correcting the student code
const judgeVegetable = function (vegetables, metric) {
  const ordered = vegetables.sort(function (a, b) {
    return b[metric] - a[metric];
  });
  return ordered[0][metric];
}

const vegetables = [
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  },
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  }
]
console.log("Start run");	

console.log(judgeVegetable(vegetables, 'redness'));