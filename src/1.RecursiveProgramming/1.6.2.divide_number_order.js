let printStore = [];
function partition2 (n) {
  let count = 0;
  
  for(let index = 1; index <= n-1; index++) {
    console.log(`${index} + ${n}`);
    count += partition2(n - index);
    console.log(`count : ${count}`);
  }
  return count + 1;
}

console.log(partition2(3));