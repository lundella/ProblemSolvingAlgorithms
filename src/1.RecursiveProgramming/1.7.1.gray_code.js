function print_code (code, n) {
  let result = '';
  for (let index =0; index < n; index++) {
    result += code[index];
  }
  console.log(result);
}

function print_gray2 (code, n, index, reverse) {
  if (index == n) {
    print_code(code, n);
    return;
  }

  code[index] = reverse;
  print_gray2(code, n, index + 1, 0);
  code[index] = 1 - reverse;
  print_gray2(code, n, index + 1, 1);
}

let store = Array.from(Array(2), () => Array(4));

print_gray2(store, 4, 0, 0);