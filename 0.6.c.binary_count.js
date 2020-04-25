function binary_transform(decimal) {
  let binary = '';
  let quota = true;
  let target = decimal;
  
  while (quota) {
    let nextTarget = Math.floor(target / 2);
    binary = (target % 2) + binary;
    
    target = nextTarget;
    quota = (nextTarget) ? true : false;
  }

  return binary;
}

function binary_count(number) {
  let binary = binary_transform(number);
  let result = 0;

  for(let index = 0; index < binary.length; index++) {
    if (parseInt(binary[index])) {
      result++;
    }
  }
  return result;
}

console.log(binary_count(1000));