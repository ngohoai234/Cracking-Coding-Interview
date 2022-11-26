// Cracking the interview
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

  deleteNode(head, d) {
    if (!head) {
      return;
    }
    let currentNode = head;

    if (currentNode.data === d) {
      this.head = currentNode.next;
      currentNode.next = null;
      return;
    }

    while (currentNode.next) {
      if (currentNode.next.data === d) {
        currentNode.next = currentNode.next.next;
      }
      currentNode = currentNode.next;
    }
  }

  print(head) {
    if (!head) {
      return;
    }
    let curNode = head;
    while (curNode) {
      console.log(curNode.data);
      curNode = curNode.next;
    }
  }

  // 2.1 Cracking the interview Coding

  removeDuplicate(head) {
    if (!head) {
      return;
    }
    // 1 2 3 3 4 4 5
    const hashNode = new Map();
    hashNode.set(head.data, 1);
    let currentNode = head;
    while (currentNode.next) {
      if (hashNode.has(currentNode.next.data)) {
        if (head.value === currentNode.next.data) {
          this.head = currentNode.next.next;
        }
        currentNode.next = currentNode.next.next;
      } else {
        hashNode.set(currentNode.next.data, 1);
        currentNode = currentNode.next;
      }
    }
  }

  // 2.2 return kth to lash

  getNthLastNode(head, k) {
    if (!head) {
      return null;
    }
    let p1 = head;
    let p2 = head;
    for (let i = 0; i < k; i++) {
      if (!p1) {
        return null;
      }
      p1 = p1.next;
    }

    while (p1) {
      p1 = p1.next;
      p2 = p2.next;
    }
    return p2;
  }

  // 2.4 partition nodes
  // Input: head = [1,4,3,2,5,2], x = 3
  // Output: [1, 2, 2, 4, 3, 5];
  partitionNode(head, x) {
    if (!head) {
      return null;
    }
    let startBefore = new NodeItem(0);
    let start = startBefore;
    let afterBefore = new NodeItem(0);
    let after = afterBefore;
    while (head) {
      const next = head.next;
      head.next = null;
      if (head.data < x) {
        start.next = head;
        start = start.next;
      } else {
        after.next = head;
        after = after.next;
      }
      head = next;
    }
    after.next = null;
    start.next = afterBefore.next;
    this.head = startBefore.next;
  }
  // 2.5 sum list

  getSumList(l1, l2) {
    // keep the first node
    let result = new NodeItem(0);
    let currentNode = result;
    let carry = 0;
    while (l1 || l2 || carry) {
      let n1 = l1 ? l1.data : 0;
      let n2 = l2 ? l2.data : 0;

      currentNode.next = new NodeItem((n1 + n2 + carry) % 10);
      currentNode = currentNode.next;

      carry = Math.floor((carry + n1 + n2) / 10);

      if (l1) {
        l1 = l1.next;
      }
      if (l2) {
        l2 = l2.next;
      }
    }
    return result.next;
  }
  // 2.6 palindrome
  isPalindrome(head) {
    let slow = head;
    let fast = head;
    const stack = [];
    while (fast && fast.next) {
      stack.push(slow.data);
      fast = fast.next.next;
      slow = slow.next;
    }
    // iff odd case
    if (fast) {
      slow = slow.next;
    }

    while (slow) {
      if (stack.pop() !== slow.data) {
        return false;
      }
      slow = slow.next;
    }
    return true;
  }

  // 2.7 intersection
  // Input : Given two linked lists, determine if two lists intersect
  isIntersection(headA, headB) {
    if (!headA || !headB) {
      return null;
    }
    let pointer_a = headA;
    let pointer_b = headB;
    while (pointer_a !== pointer_b) {
      if (pointer_a) {
        pointer_a = pointer_a.next;
      } else {
        pointer_a = headB;
      }

      if (pointer_b) {
        pointer_b = pointer_b.next;
      } else {
        pointer_b = headA;
      }
    }
    // Time Complexity O(n + m )
    // Space(1)
    return pointer_a;
  }
}
