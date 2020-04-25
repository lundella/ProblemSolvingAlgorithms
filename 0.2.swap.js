

function swap(data) {
  let temp = 0;

  temp = data.a;
  data.a = data.b;
  data.b = temp;
}



function main() {
  let swapData = {
    a: 10,
    b: 70
  }

  console.log('previous data: ', swapData);
  swap(swapData);
  
  console.log('next data: ', swapData);

}

main();