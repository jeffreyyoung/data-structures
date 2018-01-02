const Queue = require('./Queue');

class Node {
  constructor(data, children = []) {
    this.data = data;
    this.children = children;
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);

node1.children.push(node5, node3);
node5.children.push(node2, node4);
node4.children.push(node5, node6);


function breadthFirst(node) {
  let queue = new Queue();
  let visited = new Set();
  queue.add(node);
  visited.add(node);
  while (queue.size()) {
    let curNode = queue.remove();
    console.log(curNode.data);
    curNode.children
      .filter(child => !visited.has(child))
      .forEach(child => queue.add(child));
    curNode.children.forEach(child => visited.add(child));
  }
}

breadthFirst(node1);

