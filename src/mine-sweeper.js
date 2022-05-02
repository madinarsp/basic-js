const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let resMatrix = [];
  for(let i = 0; i < matrix.length; i++) {
    let rowArr = [];
    for(let j = 0; j < matrix[i].length; j++) {
      let minesAround = 0;
      let prevArr = matrix[i - 1];
      let currArr = matrix[i];
      let nextArr = matrix[i + 1];
      if(prevArr) {
        if(prevArr[j - 1]) minesAround++;
        if(prevArr[j]) minesAround++;
        if(prevArr[j + 1]) minesAround++;
      }
      if(currArr[j - 1]) minesAround++;
      if(currArr[j + 1]) minesAround++;
      if(nextArr) {
        if(nextArr[j - 1]) minesAround++;
        if(nextArr[j]) minesAround++;
        if(nextArr[j + 1]) minesAround++;
      }
      rowArr.push(minesAround);
    }
    resMatrix.push(rowArr);
  }
  return resMatrix;
}

module.exports = {
  minesweeper
};
