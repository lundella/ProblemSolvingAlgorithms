class Queue {
  constructor(space) {
    this.arr = new Array(space);
    this.start = 0;
    this.end = 0;
    this.size = 0;
  }

  enter(input) {
    if (this.size == this.arr.length) {
      console.log('queue full');
      return;
    }
    this.arr[this.end] = input;
    this.size++;
    this.end = (this.end + 1) % this.arr.length;
  }

  outer() {
    if (!this.arr[this.start]) {
      console.log('queue empty');
      return;
    }
    this.arr[this.start] = undefined;
    this.size--;
    this.start = (this.start + 1) % this.arr.length;
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

  enqueue(arr, 'a');
  enqueue(arr, 'b');
  enqueue(arr, 'rkskekfk');
  enqueue(arr, 'rkskekfk');
  enqueue(arr, {a: 7});
  console.log(arr.data());
  dequeue(arr);

  dequeue(arr);
  dequeue(arr);

  console.log(arr.data());
};


main();