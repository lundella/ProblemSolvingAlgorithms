function k_power (n, k) {
  let result = 0;
  for (let index =1; index <= n; index++) {
    result += Math.pow(index, k);
  }
  return result;
}

function k_power_r (n, k) {
  let result = 0;

  if(n == 1) {
    return 1
  }

  result += Math.pow(n, k) + k_power_r(n-1, k);
  return result;
}

console.log(k_power(5, 3));
console.log(k_power_r(5, 3));
