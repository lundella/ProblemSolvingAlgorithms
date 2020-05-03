const Stack = require('../data-structure/stack');
const Queue = require('../data-structure/queue');

class Node {
  constructor (index) {
    this.data = index;
    this.marked = false;
    this.adjacent = [];
  }
}

class Graph {
  constructor (size) {
    this.nodes = [];
    this.init(size);
  }

  init (size) {
    for(let index = 0; index < size; index++) {
      this.nodes[index] = new Node(index);
    }
  }

  data () {
    console.log(this.nodes);
    return this.nodes;
  }

  addEdge (node1, node2) {
    let node_first = this.nodes[node1];
    let node_second = this.nodes[node2];

    if(!node_first.adjacent.includes(node_second)) {
      node_first.adjacent.push(node_second);
    }
    if(!node_second.adjacent.includes(node_first)) {
      node_second.adjacent.push(node_first);
    }
  }

  dfs(index) {
    index = index || 0;
    let root = this.nodes[index];
    let stack = new Stack();
    let result = [];

    stack.enter(root);
    root.marked = true;

    while (stack.data().length) {
      let marked_node = stack.outer();

      marked_node.adjacent.forEach(node => {
        if(!node.marked) {
          node.marked = true;
          stack.enter(node);
        }
      })
      result.push(marked_node.data);
    }
    console.log(result.join(' '));
  }

  dfsR (joint) {
    if (!joint) {
      return;
    }
    joint.marked = true;
    console.log(joint.data);
    joint.adjacent.forEach(node => {
      if (!node.marked) {
        this.dfsR(node);
      }
    })
  }

  dfsRecursive (index) {
    index = index || 0;

    this.dfsR(this.nodes[index]);
  }

  bfs (index) {
    index = index || 0;
    let root = this.nodes[index];
    let queue = new Queue();
    let result = [];

    queue.enqueue(root);
    root.marked = true;

    while(queue.data().length) {
      let marked_node = queue.dequeue();

      marked_node.adjacent.forEach(node => {
        if(!node.marked) {
          node.marked = true;
          queue.enqueue(node);
        }
      })
      result.push(marked_node.data);
    }
    console.log(result.join(' '));
  }
}


function stack_graph () {
  let graph = new Graph(10);

  graph.addEdge(0, 1);
  graph.addEdge(1, 2);
  graph.addEdge(1, 3);
  graph.addEdge(2, 3);
  graph.addEdge(2, 4);
  graph.addEdge(3, 4);
  graph.addEdge(3, 5);
  graph.addEdge(5, 6);
  graph.addEdge(5, 7);
  graph.addEdge(6, 8);

  // graph.dfsRecursive();
  graph.dfsRecursive(3);
}

stack_graph();