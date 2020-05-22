// O(n^2)
function _irregular_permutation(arrangement) {
  let count = 0;

  for(let index = 0; index < arrangement.length; index++) {
    for(let find = index+1; find < arrangement.length; find++) {
      if(arrangement[index] > arrangement[find]) {
        count++;
      }
    }
  }
  return count;
}

function irregular_permutation(arrangement) {
  

}

console.log(irregular_permutation([1, 3, 5, 4, 2, 6]));
console.log(irregular_permutation([4, 3, 1, 5, 2]));