function triangle_of_pascal (n) {
  let triangleStore = new Array(n);

  for(let row = 0; row < n; row++) {
    triangleStore[row] = new Array(row+1);

    if(row == 0) {
      triangleStore[row][row] = row+1;
    }
     else {
       for(let element = 0; element <= row; element++) {
         
         triangleStore[row][element] = ((triangleStore[row - 1][element-1]) ? triangleStore[row - 1][element-1]: 0) 
           + ((triangleStore[row - 1][element])? triangleStore[row - 1][element]: 0);
       }
    }
  }
  // result = triangleStore[n - 2][k - 1] + triangleStore[n - 2][k];
  // console.log(triangleStore[n - 2][k - 1], triangleStore[n - 2][k]);
  console.log(triangleStore);
  // return result;
}
// triangle_of_pascal(10);


function triangle_of_pascal_r (triangle, row) {
  if(row == 1) {
    console.log('end of recursion');
    return [[1]];
  }

  let upperRow = triangle[row - 2];

  if (!upperRow) {
    triangle = triangle_of_pascal_r(triangle, row-1);
    triangle[row - 1] = new Array(row);

    for (let element = 0; element < row; element++) {
      let upperRowFirstTarget = upperRow[element - 1] ? upperRow[element - 1] : 0;
      let upperRowSecondTarget = upperRow[element] ? upperRow[element] : 0;

      triangle[row - 1][element] = upperRowFirstTarget + upperRowSecondTarget;
    }
  }
  return triangle;
}

console.log(triangle_of_pascal_r([], 10));