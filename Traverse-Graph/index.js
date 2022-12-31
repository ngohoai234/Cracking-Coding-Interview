const adjList = [
  [1, 3],
  [0],
  [3, 8],
  [0, 4, 5, 2],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2],
];

const traverse = (matrix) => {
  const queue = [0];
  const values = [];
  const seen = {};
  while (queue.length) {
    const currentVertex = queue.shift();
    values.push(currentVertex);
    seen[currentVertex] = true;

    for (let i = 0; i < matrix[currentVertex].length; i++) {
      if (!seen.hasOwnProperty(matrix[currentVertex][i])) {
        queue.push(matrix[currentVertex][i]);
      }
    }
  }
  return values;
};

console.log(traverse(adjList));
