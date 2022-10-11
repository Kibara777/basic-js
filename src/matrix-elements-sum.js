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

  let sum =0;
  for (let q=0;q<matrix[0].length;q++){
    for (let i=0;i<matrix.length;i++){
      if (matrix[i][q]==0){
        break;
      }
      sum+=matrix[i][q];
    }
  }
  return sum
  // remove line with error and write your code here
}

module.exports = {
  getMatrixElementsSum
};
