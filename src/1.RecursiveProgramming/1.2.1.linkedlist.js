class Node {
  constructor(no) {
    this.no = no;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.nodelist = {};
    this.start = '';
    this.end = '';
  }

  insert(no) {
    console.log(`input number: ${no}`);
    
    if(no === 0) {
      console.log(this.delete());
      return;
    } else if(no < 0) {
      while(this.size) {
        console.log(this.delete());
      }
      return;
    }
    const Random = `0x${Math.random().toString(16).slice(2, 10)}`;

    if (!this.size) { this.start = Random; }
    else { this.nodelist[this.end].next = Random; }

    this.size += 1;
    this.nodelist[Random] = new Node(no);
    this.end = Random;
  }

  delete() {
    let temp_start;
    let return_no = this.nodelist[this.start].no;

    if (this.nodelist[this.start].next) {
      temp_start = this.nodelist[this.start].next;
    }

    this.nodelist[this.start].no

    delete this.nodelist[this.start];
    this.start = temp_start ? temp_start : '';
    this.size--;

    return return_no;
  }

  data() {
    console.log(this.nodelist);
    return this.nodelist;
  }
}

let linkedList = new LinkedList();

linkedList.insert(3);
linkedList.insert(6);
linkedList.insert(9);
linkedList.insert(1);
// linkedList.data();
linkedList.insert(0);
linkedList.insert(-1);
// linkedList.data();