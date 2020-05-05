// 1.4 피보나치 수열 생각해보기
// 3일 연속 지각 피하기
// 1일 지각 확률은 1/2
// 트리보나치
// 설명 참조 : https://zzonglove.tistory.com/39
function tribonacci (n) {
  let first_element = 0;
  let second_element = 0;
  let third_element = 1;
  let temp;

  if (n < 2) { return 0; }
  else if (n === 2) { return 1; }

  for (let index = 4; index <= n; index++) {
    temp = third_element;
    third_element = third_element + second_element + first_element;
    first_element = second_element;
    second_element = temp;
  }
  return third_element;
}

function lateToWork () {
  return (tribonacci(20) / Math.pow(2, 20)) * 100;
}

console.log(lateToWork());

// 1일 지각 확률은 2/3
// 풀이 필요
