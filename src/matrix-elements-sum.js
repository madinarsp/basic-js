const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let res = matrix[0].reduce((sum, curr) => sum + curr, 0);
  for(let i = 1; i < matrix.length; i++) {
    let prevArr = matrix[i-1];
    res += matrix[i].reduce((sum, curr, index) => {
      if(prevArr[index] !== 0) return sum + curr;
      else return sum + 0;
    }, 0);
  }
  return res;
}

module.exports = {
  getMatrixElementsSum
};
