function count_money() {
  let bills = [1, 2, 5, 10, 20, 50];
  let count = 0, money=100, index0, index1, index2, index3, index4;

  for (index0 = money; index0 >=0; index0 -= bills[0]) {
    for (index1 = index0; index1 >= 0; index1 -= bills[1]) {
      for (index2 = index1; index2 >= 0; index2 -= bills[2]) {
        for (index3 = index2; index3 >= 0; index3 -= bills[3]) {
          for (index4 = index3; index4 >= 0; index4 -= bills[4]) {
            if(index4 % bills[5] == 0) { 
              count++;
            }
          }
        }
      }
    }
  }
  console.log("Count = ", count);
  return 0;
}

let dp = [];
dp[0] = 1;
function count_money_r(bills, money, toBill) {
  // console.log(bills, `${money}`);
  let count = 0;
  let iteration = 0;

  if (toBill == 1) {
    if(money % bills[0] == 0) {
      return 1;
    } else {
      return 0;
    }
  }

  iteration = money / bills[toBill-1];

  for(let index = 0; index <= iteration; index++) {
    let recalcu_money = money - (bills[toBill-1] * index);
    count += count_money_r(bills, recalcu_money, toBill-1);
  }
  return count;
}
// console.log(count_money_r([1, 2, 5], 50, 3));
// count_money();

function testMemory() {
  let dp = {};
  let coin = [1, 3];
  let money = 10
  dp[0] = 1; 
  
  for (let i = 0; i < 2; i++) { 
    for (let j = coin[i]; j <= money; j++) { 
      console.log(j, j - coin[i]);
      dp[j] = dp[j] + dp[j - coin[i]]; 
    }
  }
  console.log(dp);
}
testMemory();