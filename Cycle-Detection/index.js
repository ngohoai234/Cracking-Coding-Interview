const hasCycle = (head) => {
  const seenNode = new Set();
  let currentNode = head;
  while (!seenNode.has(currentNode)) {
    if (!currentNode) {
      return false;
    }
    seenNode.add(currentNode);
    currentNode = currentNode.next;
  }
  return true;
};
