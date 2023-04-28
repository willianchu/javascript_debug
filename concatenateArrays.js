function concatenateArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

// # long version

function concat(array1, array2) {
  for (let i = 0; i < array2.length; i++) {
    array1.push(array2[i]);
  }
  return array1;
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(concat(array1, array2));	// [1, 2, 3, 4, 5, 6]
console.log(array1);	// [1, 2, 3, 4, 5, 6] (the original array is modified)

// using an a intermediate array it will not modify the original array and will keep the code cleaner and more readable.

function concatenateArrays2(arr1, arr2) {
  let newArr = arr1;
  for (let i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i]);
  }
  return newArr;
}
