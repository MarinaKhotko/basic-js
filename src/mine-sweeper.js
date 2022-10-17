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
  let arr = ([i, j]) => [
    [i - 1, j - 1],
    [i - 1, j],
    [i - 1, j + 1],
    [i, j - 1],
    [i, j + 1],
    [i + 1, j - 1],
    [i + 1, j],
    [i + 1, j + 1],
  ];




  let matrixNew = matrix.map((el) => el.map((_) => 0));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {

        let addedEl = arr([i, j]);

        for (let m = 0; m < 8; m++) {
          if (
            addedEl[m][0] >= 0 &&
            addedEl[m][1] >= 0 &&
            addedEl[m][0] < matrix.length &&
            addedEl[m][1] < matrix[i].length
          ) {
            matrixNew[addedEl[m][0]][addedEl[m][1]]++;
          }
        }
      }
    }
  }

  return matrixNew;
}

module.exports = {
  minesweeper
};
