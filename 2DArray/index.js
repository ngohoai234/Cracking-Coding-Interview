const array = [
  [1, 2],
  [6, 2],
];

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const dfs = (matrix, row, col, seen, values) => {
  if (
    row < 0 ||
    col < 0 ||
    row >= matrix.length ||
    col >= matrix[0].length ||
    seen[row][col]
  ) {
    return;
  }
  debugger;
  values.push(matrix[row][col]);
  seen[row][col] = true;
  for (let i = 0; i < directions.length; i++) {
    const [r, c] = directions[i];
    dfs(matrix, row + r, col + c, seen, values);
  }
};

const traverseDFS = (matrix) => {
  debugger;
  const seen = new Array(matrix.length)
    .fill(0)
    .map((cell) => new Array(matrix[0].length).fill(false));
  const values = [];
  const queue = [[0, 0]];
  while (queue.length) {
    const currentPosition = queue.shift();
    const row = currentPosition[0];
    const col = currentPosition[1];

    if (
      row < 0 ||
      row >= matrix.length ||
      col < 0 ||
      col >= matrix[0].length ||
      seen[row][col]
    ) {
      continue;
    }
    seen[row][col] = true;
    values.push(matrix[row][col]);

    for (let i = 0; i < directions.length; i++) {
      const [r, c] = directions[i];

      queue.push([row + r, col + c]);
    }
  }
  return values;
};

console.log(traverseDFS(array));
