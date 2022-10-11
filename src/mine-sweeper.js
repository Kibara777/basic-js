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

  let result = [[]];
  const height = matrix.length;
  const width = matrix[0].length;

  for (let i = 0; i < height; i++) {
      result[i] = [];
      for (let q = 0; q < width; q++) {
          result[i][q] = 0;
      }
  }
  for (let i = 0; i < height; i++) {
    
      for (let q = 0; q < width; q++) {

          if (matrix[i][q] === true) {
              if (i + 1 <= height) result[i + 1][q] += 1;
              if (q + 1 <= width) result[i][q + 1] += 1;
              if (i - 1 >= 0) result[i - 1][q] += 1;
              if (q - 1 >= 0) result[i][q - 1] += 1;
              if (i - 1 >= 0 && q - 1 >= 0) result[i - 1][q - 1] += 1;
              if (i - 1 >= 0 && q + 1 <= width) result[i - 1][q + 1] += 1;
              if (i + 1 <= height && q - 1 >= 0) result[i + 1][q - 1] += 1;
              if (i + 1 <= height && q + 1 <= width) result[i + 1][q + 1] += 1;
          }
      }
  }
  return result;
}

module.exports = {
  minesweeper
};
