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
      // this.print_list();
      this.print_list2(this.start);
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

  print_list() {
    while (this.size) {
      console.log(this.delete());
    }
  }

  print_list2(node, callback) {
    if(node === null) {
      return;
    }

    let next_address = this.nodelist[node].next;
    let delete_no = this.delete();
    let stack_print = callback? callback: console.log;

    this.print_list2(next_address, (print_no) => {
      console.log(print_no);
    });
    stack_print(delete_no);
  }

  data() {
    console.log(this.nodelist);
    return this.nodelist;
  }
}

let linkedList = new LinkedList();

// linkedList.insert(3);
// linkedList.insert(6);
// linkedList.insert(9);
// linkedList.insert(1);
// linkedList.insert(0);
// linkedList.insert(-1);