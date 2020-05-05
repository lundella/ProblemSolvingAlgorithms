function fibonacci (n) {
  let store = new Array(n);

  function fibo(n) {
    if (store[n] > 0) { return store[n]; }

    if (n <= 2) { return store[n] = 1; }

    return store[n] = fibo(n - 1) + fibo(n - 2);
  }

  return fibo(n);
}

function fibonacci3 (n) {
  let first_element = 1;
  let second_element = 1;
  let temp;

  if(n <= 2) { return 1; }

  for(let index = 3; index <= n; index++) {
    temp = first_element;
    first_element = second_element + first_element;
    second_element = temp;
  }
  return first_element;
}

// console.log(fibonacci(50));
console.log(fibonacci3(50));