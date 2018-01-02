const Tree = require('./Tree');
const inOrder = require('./inOrder');
const pretty = require('./prettyPrintBinaryTree');

const t = Tree.makeRandomTree();



function topView(root) {
  let nodesByDepth = {}
  let topViewNodes = [];
  inOrder(t.root, (node, depth, x) => {
    let prevValue = nodesByDepth[depth] || [];
    nodesByDepth[depth] = [...prevValue, {node: node.data, depth, x}];
  });
  
  let min = 0;
  let max = 0;
  Object.keys(nodesByDepth).forEach(key => {
    const nodes = nodesByDepth[key];
    nodes.forEach(({node, depth, x}) => {
      if (depth === 0) {
        topViewNodes.push(node);
      } else if (x < min) {
        min = x;
        topViewNodes.push(node);
      } else if (x > max) {
        max = x;
        topViewNodes.push(node);
      }
    })
  });
  
  return topViewNodes
}

pretty(t.root);

console.log(topView(t.root));

