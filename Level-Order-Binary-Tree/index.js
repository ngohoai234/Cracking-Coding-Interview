// 102. Binary Tree Level Order Traversal

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

const levelOrder = (root) => {
  if (!root) {
    return [];
  }
  const queue = [root];
  const result = [];
  while (queue.length) {
    let count = 0;
    let currentLevel = [];
    let length = queue.length;
    while (count < length) {
      const currentNode = queue.shift();
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      currentLevel.push(currentNode.val);
      count++;
    }
    result.push(currentLevel);
  }
  return result;
};

levelOrder("Run");
