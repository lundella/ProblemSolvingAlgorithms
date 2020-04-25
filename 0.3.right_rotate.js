function right_rotate(data, startIndex, endIndex) {
  let temp = 0;

  temp = data[endIndex];

  for(let index = endIndex; index > startIndex; index--) {
    data[index] = data[index-1];
  }

  data[startIndex] = temp;
}

function main() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];

  console.log('previous arr: ', arr);
  right_rotate(arr, 2, 6);
  console.log('next arr: ', arr);
}

main();