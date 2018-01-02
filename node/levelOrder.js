const Tree = require('./Tree');
const getRandomInt = require('./getRandomInt');
const inOrder = require('./inOrder');

function levelOrder(root) {
  let depths = {}
  inOrder(root, (n, depth) => {
    let otherValues = depths[depth] || [];
    depths[depth] = [...otherValues, n.data];
  });
  return depths;
}

module.exports = levelOrder;

