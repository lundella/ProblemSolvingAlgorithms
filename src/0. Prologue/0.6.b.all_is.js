function all_is(arr, total) {
  let amount = arr.reduce((acc, value) => acc + value, 0);
  return (amount === total) ? 1 : 0;
}

console.log(all_is([10, 5], 10));