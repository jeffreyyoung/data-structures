function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

class Tree {
  add(data) {
    if (!this.root) {
      this.root=new Node(data);
      return this.root;
    }
    function addNodeRecursive(curNode, data) {
      
      if (curNode.data > data && curNode.left) {
        return addNodeRecursive(curNode.left, data);
        
      } else if (curNode.data > data && !curNode.left) {
        curNode.left = new Node(data);
        return curNode.left;
        
      } else if (curNode.data < data && curNode.right) {
        return addNodeRecursive(curNode.right, data);
        
      } else if (curNode.data < data && !curNode.right) {
        curNode.right = new Node(data);
        return curNode.right;
        
      } else if (data === curNode.data){
        //console.log('we already have this value in the tree');
      } else {
        //console.log('we should never get here :(');
      }
    }
    
    return addNodeRecursive(this.root, data);
  }
}

class Node {
  constructor(data, left = null, right = null) {
    this.left = left;
    this.right = right;
    this.data = data;
  }
}

const GLOBAL_MAX = 1000;
const GLOBAL_MIN = 0;


function generateTree() {
  const tree = new Tree();
  do {
    tree.add(getRandomInt(0, 100));
  } while (getRandomInt(0, 10) !== 5) 
  return tree;
}

Tree.makeRandomTree = generateTree;
Tree.Node = Node;

module.exports = Tree;

