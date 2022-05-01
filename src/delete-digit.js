const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNum = 0;
  let numStr = n.toString(10);
  for(let i = 0; i < numStr.length; i++) {
    let subStr = numStr.slice(0, i) + numStr.slice(i+1);
    subNum = parseInt(subStr);
    maxNum = maxNum < subNum ? subNum : maxNum;
  }
  return maxNum;
}

module.exports = {
  deleteDigit
};
