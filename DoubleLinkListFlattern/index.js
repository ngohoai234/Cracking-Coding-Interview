const flatten = (head) => {
  if (!head) {
    return null;
  }

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
      currentNode.next.prev = currentNode;

      currentNode.child = null;
    }

    return head;
  }
};
