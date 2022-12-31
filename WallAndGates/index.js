const GATE = 0;
const WALL = -1;
const INF = Infinity;

const matrix = [
  [INF, -1, 0, INF],
  [INF, INF, INF, -1],
  [INF, -1, INF, -1],
  [0, -1, INF, INF],
];

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const dfs = (matrix, row, col, currentStep) => {
  if (
    row < 0 ||
    row >= matrix.length ||
    col < 0 ||
    col >= matrix[0].length ||
    currentStep > matrix[row][col]
  ) {
    return;
  }
  matrix[row][col] = currentStep;

  for (let i = 0; i < directions.length; i++) {
    const [nextRow, nextCol] = directions[i];
    dfs(matrix, row + nextRow, col + nextCol, currentStep + 1);
  }
};

const wallsAndGates = (matrix) => {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      const element = matrix[row][col];
      if (element === GATE) {
        dfs(matrix, row, col, 0);
      }
    }
  }
  return matrix;
};

wallsAndGates(matrix);
