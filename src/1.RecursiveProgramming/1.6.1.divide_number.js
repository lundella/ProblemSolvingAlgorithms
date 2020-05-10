function partition(total, divide) {
  let count = 1;
  // let printText = '';
  
  for (let iteration = 1, rest = 0; rest <= total; iteration++) {
    rest = total - (divide * iteration);
    if (rest < 0) {
      break;
    } else {
      // for (let index = 0; index < iteration; index++) {
      //   printText += divide + ' + ';
      // }

      // for (let index = 0; index < rest; index++) {
      //   if (index === rest - 1) {
      //     printText += '1';
      //   } else {
      //     printText += '1 + ';
      //   }
      // }
      count++;
    }
  }
  return count;
}

function custom(total, divide) {
  let count = 0;

  for (let divideNumber = 2; divideNumber <= divide; divideNumber++) {
    count += partition(total, divideNumber);
  }
  console.log(count);
}
// console.log(custom(5 ,3));

let memo = Array.from(Array(201), () => Array(201));
let test = 0;
function sample (total, divide) {
  let count = 0;

  if (total < divide) {
    divide = total;
  }

  if(memo[total][divide] > 0) {
    test++;
    return memo[total][divide];
  }

  if (total == 0) {
    return memo[total][divide] = 1;
  }

  for (let index = 1; index <= divide; index++) {
    count += sample(total-index, index);
  }
  return memo[total][divide] = count;
}
console.log(sample(200, 200));