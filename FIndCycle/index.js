// const findCycle = (head) => {
//   if (!head) {
//     return false;
//   }
//   const set = new Set();
//   let currentNode = head;

//   while (!set.has(currentNode)) {
//     if (currentNode.next === null) {
//       return false;
//     }
//     set.add(currentNode);
//     currentNode = currentNode.next;
//   }
//   return currentNode;
// };

// tortoise and hare
const findCycle = (head) => {
  if (!head) {
    return null;
  }
  let tortoise = head;
  let hare = head;

  while (true) {
    tortoise = tortoise.next;
    hare = hare.next;
    if (hare === null || hare.next === null) {
      return false;
    } else {
      hare = hare.next;
    }
    if (hare.val === tortoise.val) {
      return true;
    }
  }
};
