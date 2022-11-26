const array = [
  [1, 2, 3, 4, 1],
  [6, 7, 8, 9, 10],
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
    return false;
  }

  values.push(matrix[row][col]);
  seen[row][col] = true;

  for (let i = 0; i < directions.length; i++) {
    const [currentRow, currentColumn] = directions[i];
    dfs(matrix, row + currentRow, col + currentColumn, seen, values);
  }
};

const traverseDFS = (matrix) => {
  if (!Array.isArray(matrix)) {
    return [];
  }
  const values = [];
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));
  dfs(matrix, 0, 0, seen, values);
};

const traverseBFS = (matrix) => {
  if (!Array.isArray(matrix)) {
    return [];
  }
  const values = [];
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));

  const queue = [[0, 0]];
  while (queue.length) {
    const currentPos = queue.shift();
    const row = currentPos[0];
    const col = currentPos[1];
    if (
      row < 0 ||
      col < 0 ||
      row >= matrix.length ||
      col >= matrix[0].length ||
      seen[row][col]
    ) {
      continue;
    }

    seen[row][col] = true;
    values.push(matrix[row][col]);

    for (let i = 0; i < directions.length; i++) {
      const [currentRow, currentColumn] = directions[i];
      queue.push([row + currentRow, col + currentColumn]);
    }
  }
  return values;
};

const countIsLands = (matrix) => {
  if (!matrix.length) {
    return 0;
  }

  let countLands = 0;
  debugger;

  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[0].length; column++) {
      if (matrix[row][column] === 1) {
        countLands++;
        const queue = [];
        queue.push([row, column]);

        matrix[row][column] = 0;

        while (queue.length) {
          const currentPost = queue.shift();

          const currentRow = currentPost[0];
          const currentColumn = currentPost[1];

          for (let direction = 0; direction < directions.length; direction++) {
            const nextRow = currentRow + directions[direction][0];
            const nextColumn = currentColumn + directions[direction][1];
            if (
              nextRow < 0 ||
              nextRow >= matrix.length ||
              nextColumn < 0 ||
              nextColumn >= matrix[0].length
            ) {
              continue;
            }
            if (matrix[nextRow][nextColumn] === 1) {
              matrix[nextRow][nextColumn] = 0;
              queue.push([nextRow, nextColumn]);
            }
          }
        }
      }
    }
  }
  return countLands;
};

console.log(
  countIsLands([
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 1, 1],
  ])
);
