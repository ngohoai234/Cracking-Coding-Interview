// Solution level-order

// const rightSideView = (root) => {
//   if (!root) {
//     return [];
//   }
//   const queue = [root];
//   const result = [];
//   let lastNode = root;

//   while (queue.length) {
//     let count = 0;
//     let length = queue.length;
//     while (count < length) {
//       const currentNode = queue.shift();
//       lastNode = currentNode;
//       if (currentNode.left) {
//         queue.push(currentNode.left);
//       }
//       if (currentNode.right) {
//         queue.push(currentNode.right);
//       }
//       count++;
//     }
//     result.push(lastNode.val);
//   }
//   return result;
// };

// solution depth first search

const dfs = (currentNode, result, currentLevel) => {
  if (!currentNode) {
    return;
  }
  if (currentLevel >= result.length) {
    result.push(currentNode.val);
  }
  currentNode.right && dfs(currentNode.right, result, currentLevel + 1);
  currentNode.left && dfs(currentNode.left, result, currentLevel + 1);
};
const rightSideView = (root) => {
  if (!root) {
    return [];
  }
  const result = [];

  dfs(root, result, 0);
  return result;
};
