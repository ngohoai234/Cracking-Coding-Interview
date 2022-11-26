class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(values) {
    const queue = [this];
    let i = 0;
    while (queue.length > 0) {
      let current = queue.shift();
      for (let side of ["left", "right"]) {
        if (!current[side]) {
          if (values[i] !== null) {
            current[side] = new TreeNode(values[i]);
          }
          i++;
          if (i >= values.length) return this;
        }
        if (current[side]) queue.push(current[side]);
      }
    }
    return this;
  }
}

const root = new TreeNode(2);

root.insert([1, 3]);

var maxDepth = function (node, currentDepth) {
  if (!node) {
    return currentDepth;
  }

  currentDepth++;

  return Math.max(
    maxDepth(node.right, currentDepth),
    maxDepth(node.left, currentDepth)
  );
};
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  const result = [];
  const queue = [root];

  while (queue.length) {
    let count = 0;
    const currentLevel = [];
    const length = queue.length;
    while (count < length) {
      const currentNode = queue.shift();
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      currentLevel.push(currentNode.value);
      count++;
    }
    result.push(currentLevel);
  }
  return result;
};

const dfs = (currentNode, currentLevel, result) => {
  if (!currentNode) {
    return;
  }

  if (currentLevel >= result.length) {
    result.push(currentNode.value);
  }

  if (currentNode.right) {
    dfs(currentNode.right, currentLevel + 1, result);
  }
  if (currentNode.left) {
    dfs(currentNode.left, currentLevel + 1, result);
  }
};

var rightSideView = function (root) {
  const result = [];

  dfs(root, 0, result);
  return result;
};

const dfsMinMax = (currentNode, min, max) => {
  if (currentNode.value <= min || currentNode.value >= max) {
    return false;
  }
  if (currentNode.left) {
    if (!dfsMinMax(currentNode.left, min, currentNode.value)) {
      return false;
    }
  }
  if (currentNode.right) {
    if (!dfsMinMax(currentNode.right, currentNode.value, max)) {
      return false;
    }
  }
  return true;
};

const isValidBinaryTree = (root) => {
  if (!root) {
    return false;
  }
  return dfsMinMax(root, -Infinity, Infinity);
};

console.log(isValidBinaryTree(root));
