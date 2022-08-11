function singlePeak(arr) {
  let isClimbing = true;
  let lastValue = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > lastValue) {
     // is climbing
     if (isClimbing === false) {
       return false;
     }
     lastValue = arr[i];
    } else if (arr[i] < lastValue) {
      // is descending
      isClimbing = false;
      lastValue = arr[i];
    } else {
      // is a plateau
      continue;
    }
  }
  return true;
}








// let singlePeak = [1,2,3,4,5,6,7,8,9,9,9,8,7,7,6,5,4,3,2,1];
let multiple = [1,2,3,4,5,6,7,8,9,8,9,9,8,7,7,6,5,4,3,2,1];

console.log(singlePeak(multiple));

