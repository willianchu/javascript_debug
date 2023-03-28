const calculateChange = function(total, cash) {
  
  customerChange ={};
  
  change = (cash - total) * 100;
 
  denominations = {
    twentyDollars: 2000,
    tenDollars: 1000,
    fiveDollars: 500,
    twoDollars: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1,
  }

  const changeCalc = function (change) {

      for (d in denominations) {
        console.log(change,">=", denominations[d],(change >= denominations[d]));
        if (change >= denominations[d]) {
          customerChange[d] = customerChange[d] + 1 || 1;
          change -= denominations[d];
          break
        }
      }
  }

  changeCalc(change)
  return (customerChange)
}

console.log(calculateChange(16.55, 20));