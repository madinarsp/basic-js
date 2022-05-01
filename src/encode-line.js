const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbccc should return 2a3b3c
 *
 */
function encodeLine(str) {
  let encodedStr = "";
  let currChar = str[0];
  let count = 1;
  for(let i = 0; i < str.length; i++) {
    if(str[i+1] === currChar) {
      count++;
    } else {
      encodedStr += (count = count === 1 ? '' : count) + currChar;
      count = 1;
      currChar = str[i+1];
    }
  }
  return encodedStr;
}

module.exports = {
  encodeLine
};
