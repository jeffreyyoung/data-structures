const Tree = require('./Tree');
const Node = Tree.Node;


function isValidTree(root) {
  let lastValue = null;
  
  function isValidTreeRecurse(node) {
    if (node) {
      isValidTreeRecurse(node.left);
      if (lastValue === null) {
        lastValue = node.data;
      } else if (node.data <= lastValue) {
        return false;
      }
      isValidTreeRecurse(node.right);
    }
  }
  
  let isValidResult = isValidTreeRecurse(root);
  
  return isValidResult !== false;
  
}

let validTree = Tree.makeRandomTree().root;

console.log(isValidTree(validTree))

/*


         45
        /  \
       34   48
         \
          46

 */
let invalidTree = new Node(45,
  new Node(34,
    new Node(46)
  ),
  new Node(48)
)
console.log(isValidTree(invalidTree))