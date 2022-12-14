// 92. Reverse Linked List II
class NodeItem {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkList {
  constructor(head) {
    this.head = new NodeItem(head);
  }

  appendToTail(data) {
    const end = new NodeItem(data);

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = end;
  }
  print(head) {
    let currentNode = head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

const lst = new LinkList(3);

lst.appendToTail(5);

const reverseBetween = (head, m, n) => {
  if (!head) {
    return null;
  }
  if (m >= n) {
    return head;
  }

  if (m <= 0 || n <= 0) {
    return head;
  }

  let currentPosition = 1;
  let currentNode = head;
  let beforeStart = currentNode;
  let newNode = null;

  while (currentNode < m) {
    beforeStart = currentNode;
    currentNode = currentNode.next;
    currentPosition++;
  }
  let tail = currentNode;
  while (currentNode >= n && currentNode <= m && currentNode) {
    let nextNode = currentNode.next;
    currentNode.next = newNode;
    newNode = currentNode;
    currentNode = nextNode;
    currentPosition++;
  }
  beforeStart.next = newNode;
  tail.next = currentNode;
  if (m > 1) {
    return head;
  }
  return newNode;
};

reverseBetween(lst.head, 1, 2);
