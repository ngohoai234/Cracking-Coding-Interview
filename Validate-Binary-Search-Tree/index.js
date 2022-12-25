const dfsMinMax = (currentNode, maxLeft, maxRight) => {
  if (currentNode.val <= maxLeft || currentNode.val >= maxRight) {
    return false;
  }
  if (currentNode.left) {
    if (!dfsMinMax(currentNode.left, maxLeft, currentNode.val)) {
      return false;
    }
  }
  if (currentNode.right) {
    if (!dfsMinMax(currentNode.right, currentNode.val, maxRight)) {
      return false;
    }
  }
  return true;
};

const isValidBST = (root) => {
  if (!root) {
    return false;
  }
  return dfsMinMax(root, -Infinity, Infinity);
};
