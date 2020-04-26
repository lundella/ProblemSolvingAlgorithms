let Stack = require('../data-structure/stack.js');

class Queue {
  constructor() {
    this.inputStack = new Stack();
    this.outputStack = new Stack();
  }

  enqueue(value) {
    this.inputStack.enter(value);
  }

  dequeue() {
    if(!this.outputStack.end) {
      let inputStackSize = this.inputStack.data().length;
      for (let index = 0; index < inputStackSize; index++) {
        this.outputStack.enter(this.inputStack.outer());
      }
    }
    this.outputStack.outer();
  }

}

let queueByStack = new Queue();

queueByStack.enqueue(1);
queueByStack.enqueue(2);
queueByStack.dequeue();
queueByStack.enqueue(3);
queueByStack.dequeue();
queueByStack.dequeue();

