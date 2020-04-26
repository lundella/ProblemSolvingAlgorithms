function k_rotate(data, k) {
  let temp = [];
  let last = data.length;

  for (let index = last-k; index < last; index++) {
    temp.push(data[index]);
  }
  for (let index = 0, start = k; index < last-k; index++, start++) {
    data[start] = data[index];
  }
  for(let index = 0; index < k; index++) {
    data[index] = temp[index];
  }
}

function main() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  let k = 5;

  console.log('previous arr: ', arr);
  k_rotate(arr, k);
  console.log('next arr:     ', arr);
}

main();