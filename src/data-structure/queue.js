class Queue {
  constructor(space) {
    this.arr = new Array(space);
    this.start = 0;
    this.end = 0;
  }

  enqueue(input) {
    if (this.arr.length == this.end) {
      console.log('queue full');
      return;
    }
    this.arr[this.end] = input;
    this.end = (this.end + 1) % this.arr.length;
  }

  dequeue() {
    if (!this.arr[this.start]) {
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