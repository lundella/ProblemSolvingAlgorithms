function left_rotate(data, startIndex, endIndex) {
  let temp = 0;

  temp = data[startIndex];

  for (let index = startIndex; index < endIndex; index++) {
    data[index] = data[index+1];
  }

  data[endIndex] = temp;
}

function main() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];

  console.log('previous arr: ', arr);
  left_rotate(arr, 2, 6);
  console.log('next arr:     ', arr);
}

main();