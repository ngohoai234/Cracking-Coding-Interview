const maxDepth = (head, currentDepth) => {
  if (!head) return currentDepth;

  currentDepth++;
  return (
    Math.max(
      maxDepth(head.left, currentDepth),
      maxDepth(head.right, currentDepth)
    ) + 1
  );
};
