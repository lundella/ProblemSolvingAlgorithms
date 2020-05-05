function main() {
  const N = 10;
  let i, j, k, x = 0;

  for(i = 0; i < N; i++) {
    for(j = i; j < N; j++) {
      for(k = j; k < N; k++) {
        console.log(i + ' ' + j + ' ' + k);
        x++;
      }
    }
  }
  console.log("--", x);

  return 0;
}

main();