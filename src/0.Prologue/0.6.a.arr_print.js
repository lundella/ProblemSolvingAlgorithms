function print_arr(arr, size) {
  let result = [];
  let iterationSize = (size < arr.length)? size: arr.length;

  for (let index = 0; index < iterationSize; index++) {
    result.push(arr[index]);
  }
  console.log(result);
}

module.exports = print_arr;