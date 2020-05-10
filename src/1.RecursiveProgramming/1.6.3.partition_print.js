let print_arr = require('../0.Prologue/0.6.a.arr_print');

function partition_print(total, divide, arr, arr_len) {
  let count = 0;

  if (total < divide) {
    divide = total;
  }

  if (total == 0) {
    print_arr(arr, arr_len);
    return 1;
  }

  for(let index = 1; index <= divide; index++) {
    arr[arr_len] = index;
    count += partition_print(total -index, index, arr, arr_len+1);
  }
  return count;
}

console.log(partition_print(5, 3, [], 0));

