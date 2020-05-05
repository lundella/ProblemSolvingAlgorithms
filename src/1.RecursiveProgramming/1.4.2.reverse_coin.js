// 1.4 피보나치 수열 생각해보기
// 동전던지기 문제와 같다.
// 0이 뒷면 1이 앞면이다. 뒷면이 연속해서 나올 수 없다.
// 길이가 n일 때, 올바른 문자열인 경우는 몇 개일까?
// 설명 참조 : https://sdev.tistory.com/319
function fibonacci(n) {
  let store = new Array(n);

  function fibo(n) {
    if (store[n] > 0) { return store[n]; }

    if (n <= 2) { return store[n] = 1; }

    return store[n] = fibo(n - 1) + fibo(n - 2);
  }

  return fibo(n);
}

function referseCoint(n) {
  return fibonacci(n+2);
}