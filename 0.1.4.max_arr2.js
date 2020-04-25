const max = require('./0.1.max');

function max_arr2(arr) {
  console.log('input data', arr);
  if(arr.length === 1) {
    return arr[0];
  } else {
    return max(arr[arr.length-1], max_arr2(arr.splice(0, arr.length-1)))
  }
}

module.exports = max_arr2;