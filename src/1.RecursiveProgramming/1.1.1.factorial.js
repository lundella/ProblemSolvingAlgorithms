function factorial(n) {
  let result = 1;

  for(let index = 2; index <= n; index++) {
    result *= index;
  }

  return result;
}

console.log(factorial(1000000));