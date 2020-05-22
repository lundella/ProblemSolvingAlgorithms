function compose_of_natural(target, max, result) {
  result = result ? result : [];

  if(result.length >= max-1) {
    result.push(target);
    console.log(result);
    return;
  }
  
  for(let index = 1; index <= max; index++) {
    let initresult = Object.assign([], result);

    initresult.push(index);
    if (target - index > 0) {
      compose_of_natural(target - index, max, initresult);
    }
  }
}

compose_of_natural(5, 3);

