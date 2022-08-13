const conditionalSum = function(values, condition) {
  if(condition === "even"){
    for (let i = 0; i< values.length; i++){
      let values = values % 2 === 0 ? true : false;
      let sum = 0
      sum += values[i]
      return sum;
    }
  }else if (condition === "odd"){
    for (let j = 0; j< values.length; j++){
      let values = values % 3 === 0;
      let sum = 0
      sum += values[j];
      return sum;
    }
  } else {
    console.log("0");
    }
  } 


console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));