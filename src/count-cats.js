const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(cubes) {
  let count = 0;
  flatCubes = cubes.flat();
  for(var i = 0; i < flatCubes.length; i++) {
      if (flatCubes[i] === '^^'){
        count++;
      }
    }
  return count;
}

module.exports = {
  countCats
};
