function divide_number(total, number) {
  console.log('---start of function --- ', total +' ' + number);
  let result = 0;

  if (total < number) {
    number = total;
  }

  if(total == 0) {
    console.log('when total is zero ');
    return 1;
  }
  
  
  for(let index =1; index <= number; index++) {
    console.log(`index: ${index}, total: ${total}`);
    result += divide_number(total - index, number);
  }
  return result;
}

console.log(divide_number(5, 2));