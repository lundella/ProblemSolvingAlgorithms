function max_arr(arr) {
  let maxa = 0;

  arr.forEach(value => {
    if (maxa < value) {
      maxa = value;
    }
  })

  return maxa;
}


module.exports = max_arr;