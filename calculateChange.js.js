const calculateChange = function(total, cash) {
  
  customerChange ={};
  
  change = cash - total;
 
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

    while (change > 0 ) {
      for (d in denominations) {
        if (change >= denominations[d]) {
          customerChange[d] = customerChange[d] + 1 || 1;
          change -= denominations[d];
          break
        }
      }
    }
  }
  changeCalc(change)
  return (customerChange)
}

console.log(calculateChange(1787, 2000));