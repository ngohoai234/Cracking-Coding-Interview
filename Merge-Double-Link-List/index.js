// 430. Flatten a Multilevel Doubly Linked List

const flatten = (head) => {
  if (!head) return null;
  let currentNode = head;
  while (currentNode) {
    if (!currentNode.child) {
      currentNode = currentNode.next;
    } else {
      let tail = currentNode.child;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = currentNode.next;
      if (tail.next) {
        tail.next.prev = tail;
      }
      currentNode.next = currentNode.child;
      currentNode.child.prev = currentNode;
      currentNode.child = null;
    }
  }
};
