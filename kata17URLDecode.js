/* Function will receive a url encoded string and return a 
* Javascript object that represents the data.
* @param {string} text -- url encoded string
*/
const urlDecode = function(text) {
  // separate text at '%20' and join to create whitespace
  // separate text again at '&' and '='
  let sep = text.split('%20').join(' ').split(/[&=]/);
  console.log("sep=",sep);
  // initiate empty decoded object
  let decoded = {};

  // loop to find key and value pairs
  for (let i = 0; i < sep.length; i += 2) {
    let key = sep[i];
    let value = sep[i + 1];
    console.log("loop ",i," key=",key," value=",value);
    decoded[key] = value;
  }
  return decoded;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").city);