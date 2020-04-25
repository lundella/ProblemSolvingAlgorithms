function print_arr(arr, size) {
  let result = [];
  let iterationSize = (size < arr.length)? size: arr.length;

  for (let index = 0; index < iterationSize; index++) {
    result.push(arr[index]);
  }

  return result;
}

console.log(print_arr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));