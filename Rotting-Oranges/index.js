// Solution : BFS

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const ROTTEN = 2;
const FRESH = 1;
const EMPTY = 0;

const rottingOranges = (matrix) => {
  if (!matrix.length) {
    return 0;
  }
  let freshOranges = 0;
  let queue = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === ROTTEN) {
        queue.push([row, col]);
      } else if (matrix[row][col] === FRESH) {
        freshOranges++;
      }
    }
  }

  let minutes = 0;
  let currentQueueLength = queue.length;

  while (queue.length > 0) {
    if (currentQueueLength === 0) {
      minutes++;
      currentQueueLength = queue.length;
    }
    currentQueueLength--;
    const currentOrange = queue.shift();
    const row = currentOrange[0];
    const col = currentOrange[1];
    for (let i = 0; i < directions.length; i++) {
      const currentDirection = directions[i];
      const nextRow = row + currentDirection[0];
      const nextCol = col + currentDirection[1];
      if (
        nextRow < 0 ||
        nextRow >= matrix.length ||
        nextCol < 0 ||
        nextCol >= matrix[0].length
      ) {
        continue;
      }
      if (matrix[nextRow][nextCol] === FRESH) {
        matrix[nextRow][nextCol] = ROTTEN;
        freshOranges--;
        queue.push([nextRow, nextCol]);
      }
    }
  }
  return freshOranges > 0 ? -1 : minutes;
};

console.log(
  rottingOranges([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
