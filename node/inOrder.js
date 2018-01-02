function inOrder(node, analyzeFn, depth = 0, x = 0) {
  if (node) {
    inOrder(node.left, analyzeFn, depth + 1, x - 1);
    analyzeFn(node, depth, x);
    inOrder(node.right, analyzeFn, depth + 1, x + 1);
  }
}
module.exports = inOrder;