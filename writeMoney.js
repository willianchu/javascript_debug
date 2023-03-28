function writeMoney(value) {
  const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
                 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const scales = ['', 'thousand', 'million', 'billion'];
  let dollars = Math.floor(value);
  let cents = Math.round((value - dollars) * 100);
  let scaleIndex = 0;
  let result = '';
  if (dollars > 0) {
    while (dollars > 0) {
      if (dollars >= 1000) {
        const subDollars = dollars % 1000;
        if (subDollars > 0) {
          result = `${writeMoney(subDollars)} ${scales[scaleIndex]} ${result}`;
        }
        dollars = Math.floor(dollars / 1000);
        scaleIndex++;
      } else {
        if (dollars >= 100) {
          result += `${words[Math.floor(dollars / 100)]} hundred `;
          dollars %= 100;
        }
        if (dollars >= 20) {
          result += `${tens[Math.floor(dollars / 10) - 2]} `;
          dollars %= 10;
        }
        if (dollars > 0) {
          result += `${words[dollars]} `;
        }
        result += `${scales[scaleIndex]} `;
        dollars = 0;
        scaleIndex++;
      }
    }
    result += 'dollars ';
  }
  if (cents > 0) {
    result += 'and ';
    if (cents >= 20) {
      result += `${tens[Math.floor(cents / 10) - 2]} `;
      cents %= 10;
    }
    if (cents > 0) {
      result += `${words[cents]} `;
    }
    result += 'cents';
  } else {
    result += 'zero cents';
  }
  return result.trim();
}


console.log(writeMoney(155.62)); 
