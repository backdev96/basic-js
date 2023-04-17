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
  for(var i = 0; i < cubes.length; i++) {
    var cube = cubes[i];
    for(var j = 0; j < cube.length; j++) {
        display("cube[" + i + "][" + j + "] = " + cube[j]);
    }
}


}

module.exports = {
  countCats
};
