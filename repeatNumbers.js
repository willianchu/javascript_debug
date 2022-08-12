const repeatNumbers = function (data) {
  let newArrayOne = [];
  for (let y = 0; y < data.length; y++) {
    for (let x = 0; x < data[y].length; x++) {
      newArrayOne[y] = Array(data[y][1]).fill(data[y][0]);
    }
  };
  return newArrayOne;
}


// const repeatNumbers = function(data) {
//   let repeated = [];
//   for(let piece of data){
//     repeated += (repeated.length == 0 ? "" : ", ") + cloning(piece);
//   }
//   return repeated;
// };

// function cloning (array){
//   if (array.length !== 2){return 0} // abort
//   let result = '';
//   for(let i = 0 ; i < array[1] ; i++){
//     result += array[0]
//   }
//   return result;
// }

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));