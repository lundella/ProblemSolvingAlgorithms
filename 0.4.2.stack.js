class Stack {
  constructor(space) {
    this.arr = new Array(space);
    this.start = 0;
    this.end = 0;
  }

  enter(input) {
    if(this.arr.length == this.end) {
      console.log('stack full');
      return;
    }
    this.arr[this.end] = input;
    this.end++;
  }

  outer() {
    console.log('outer end', this.end);

    if(!this.end) {
      console.log('stack empty');
      return;
    }
    this.end--;
    this.arr[this.end] = undefined;
  }

  data() {
    console.log(this.arr);
    return this.arr;
  }
}

function main() {
  const Space = 8;
  let stack = new Stack(Space);

  for(let index = 0; index < Space; index++) {
    stack.enter(index);
  }

  stack.outer();
  stack.enter(11);
}

main();