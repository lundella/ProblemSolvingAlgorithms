function gray_code(n) {
  let bit = ['0', '1'];
  let result = [];
  let prevCode = [];

  if (n == 1) {
    return bit;
  }

  if (1 < n) {
    prevCode = gray_code(n - 1);
  }

  for (let index = 0; index < prevCode.length; index++) {
    result[index] = 0 + prevCode[index];
  }
  for (let index = (prevCode.length-1); 0 <= index; index--) {
    result.push(1 + prevCode[index]);
  }
  console.log(result.length);
  return result;
}
let store = Array.from(Array(2), () => Array(4));
function get_gray (n) {
  if (n == 1) {
    return ['0', '1'];
  }

  if(1 < n) {
    // console.log(store);
    if(store[0][n]) return store[0][n];
  }

  let gray = get_gray(n - 1).map(item => {
    return '0' + item;
  });
  let reverse = reverse_gray(n - 1).map((item) => {
    return '1' + item;
  });

  store[0][n] = gray.concat(reverse);
  return gray.concat(reverse);
}

function reverse_gray (n) {
  if(n == 1) {
    return ['1', '0'];
  }

  if (1 < n) {
    if (store[1][n]) return store[1][n];
  }

  let gray = get_gray(n - 1).map(item => {
    return '0' + item;
  });

  let reverse = reverse_gray(n - 1).map((item) => {
    return '1' + item;
  });

  store[1][n] = gray.concat(reverse).reverse();
  return gray.concat(reverse).reverse();
}

console.log(gray_code(20));
// console.log(get_gray(20));
// console.log(store);