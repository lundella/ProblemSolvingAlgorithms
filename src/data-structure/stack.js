class Stack {
  constructor(space) {
    this.arr = new Array(space);
    this.start = 0;
    this.end = 0;
  }

  enter(input) {
    this.arr[this.end] = input;
    this.end++;
  }

  outer() {
    if (!this.end) {
      console.log('stack empty');
      return;
    }
    let temp = this.arr[this.end-1];
    
    this.arr.length = this.end-1;
    this.end--;


    return temp;
  }

  data() {
    return this.arr;
  }
}

module.exports = Stack;