function writtenChange(total, cash) {
  const change = cash - total;
  const denominations = [
    { value: 100, name: "one hundred" },
    { value: 50, name: "fifty" },
    { value: 20, name: "twenty" },
    { value: 10, name: "ten" },
    { value: 5, name: "five" },
    { value: 1, name: "one" },
    { value: 0.25, name: "quarter" },
    { value: 0.10, name: "dime" },
    { value: 0.05, name: "nickel" },
    { value: 0.01, name: "penny" },
  ];

  let result = "";
  let remaining = change;

  for (let i = 0; i < denominations.length; i++) {
    const denomination = denominations[i];
    const count = Math.floor(remaining / denomination.value);
    if (count > 0) {
      result += `${count} ${denomination.name}${count > 1 ? 's' : ''}`;
      remaining -= count * denomination.value;
      if (remaining > 0.001) {
        result += ", ";
      }
    }
  }

  return result;
}

console.log(writtenChange(19.99, 50)); // Outputs
console.log(writtenChange(100, 100)); // Outputs ""

