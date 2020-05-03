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

  insert(order) {
    const Random = `0x${Math.random().toString(16).slice(2, 10)}`;

    // order 입력이 없을때
    if (!order || (order == this.size)) {
      if (Object.keys(this.nodelist).length) {
        // 데이터가 입력이 처음이 아닐 때
        this.nodelist[this.end].next = Random;
      } else {
        // 데이터가 처음 입력됐을 때
        this.start = Random;
      }

      this.nodelist[Random] = new Node(this.size + 1);
      this.end = Random;
    } else {
      // order 조건이 존재할 때
      // order 값이 유효할 때
      // order 입력 값이 리스트 초과일 때
      let index = 1;

      if (order < this.size) {
        let startNode = this.start;
        let temp = '';
        let delayNode = '';
        while (index <= this.size) {
          if (index == order - 1) {
            temp = this.nodelist[startNode].next
            delayNode = this.nodelist[temp];

            this.nodelist[startNode].next = Random;
            this.nodelist[Random] = new Node(order);
            this.nodelist[Random].next = temp;
          }

          if (order <= index) {
            delayNode.no++;
            delayNode = this.nodelist[delayNode.next];
          }

          startNode = this.nodelist[startNode].next;
          index++;
        }
      }
    }
    this.size++;

  }

  delete() {
    let temp_start;

    if (!this.start) {
      return -1;
    }
    if (this.nodelist[this.start].next) {
      temp_start = this.nodelist[this.start].next;
    }

    delete this.nodelist[this.start];
    this.start = temp_start ? temp_start : '';
    this.size--;
  }

  data() {
    console.log(this.nodelist);
    return this.nodelist;
  }
}