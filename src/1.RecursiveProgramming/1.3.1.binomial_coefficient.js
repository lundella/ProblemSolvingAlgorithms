function binomal_coefficient () {
  let store = Array.from(Array(50), () => Array(20));
  let call_count = 0;
  let call_count2 = 0;

  function combination(n, r) {
    call_count++;
    if (r == n || r == 0) { return 1; }
    // console.log(`${n}C${r} `);
    return combination(n - 1, r - 1) + combination(n - 1, r);
  }


  function combination2(n, r) {
    call_count2++;

    if (store[n][r] > 0) { return store[n][r]; }

    if (r == n || r == 0) { return store[n][r] = 1; }

    return store[n][r] = combination2(n - 1, r - 1) + combination2(n - 1, r);

  }
  console.log(combination(20, 10));
  console.log(call_count);
  console.log(combination2(20, 10));
  console.log(call_count2);
  
}
binomal_coefficient();
