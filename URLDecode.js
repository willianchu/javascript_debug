/* Function will receive a url encoded string and return a 
* Javascript object that represents the data.
* @param {string} text -- url encoded string
*/
const urlDecode = function(text) {
  const decoded = {};
  const pairs = text.split('&');
  for (let pair of pairs) {
    const [key, value] = pair.split('=');
    decoded[key] = value.replace(/%20/g, ' ');
  }
  return decoded;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").city);