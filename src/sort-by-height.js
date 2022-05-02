const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrOfIndexes = [];
  let arrOfGeneralNums = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === -1) arrOfIndexes.push(i);
    else arrOfGeneralNums.push(arr[i]);
  }
  arrOfGeneralNums.sort((a, b) => a - b);
  arrOfIndexes.forEach(index => {
    arrOfGeneralNums.splice(index, 0, -1);
  });
  return arrOfGeneralNums;
}

module.exports = {
  sortByHeight
};
