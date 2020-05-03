function fibonacci (n) {
  let store = new Array(n);

  function fibo(n) {
    if (store[n] > 0) { return store[n]; }

    if (n <= 2) { return store[n] = 1; }

    return store[n] = fibo(n - 1) + fibo(n - 2);
  }

  return fibo(n);
}

console.log(fibonacci(50));