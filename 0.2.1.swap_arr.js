function swap_arr(data, previousIndex, nextIndex) {
  let temp;

  temp = data[previousIndex];
  data[previousIndex] = data[nextIndex];
  data[nextIndex] = temp;
}

function main() {
  let arr = [10, 70];

  console.log('previous arr: ', arr);
  swap_arr(arr, 0, 1);
  console.log('next arr: ', arr);
}

main();