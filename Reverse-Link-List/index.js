// 206. Reverse Linked List

const reverseList = (head) => {
  let currentNode = head;
  let prev = null;

  while (currentNode) {
    const nextNode = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = nextNode;
  }
  return prev;
};
