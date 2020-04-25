class Queue {
  constructor(space) {
    this.arr = new Array(space);
    this.start = 0;
    this.end = 0;
  }

  enter(input) {
    if(this.arr.length == this.end) {
      console.log('queue full');
      return;
    }
    this.arr[this.end] = input;
    this.end = (this.end + 1) % this.arr.length;
  }

  outer() {
    if(!this.arr[this.start]) {
      console.log('queue empty');
      return;
    }
    this.arr[this.start] = undefined;
    this.start++;
  }

  data() {
    return this.arr;
  }
}

const enqueue = (queue, input) => {
  queue.enter(input);
};
const dequeue = (queue) => {
  queue.outer();
};

const main = () => {
  let arr = new Queue(8);
  
  enqueue(arr, 1);
  enqueue(arr, 2);
  enqueue(arr, 2);
  enqueue(arr, 2);
  enqueue(arr, 2);  
  enqueue(arr, 2);  
  enqueue(arr, 2);  
  enqueue(arr, 2);
  enqueue(arr, 2);
};


main();