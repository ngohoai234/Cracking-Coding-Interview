const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const numIslands = (grid) => {
  if (!grid.length) {
    return 0;
  }

  let countLands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        const queue = [];
        queue.push([i, j]);
        grid[i][j] = "0";
        countLands++;

        while (queue.length) {
          const [r, c] = queue.shift();
          for (let k = 0; k < directions.length; k++) {
            const direction = directions[k];
            const nextRow = r + direction[0];
            const nextColumn = c + direction[1];

            if (
              nextRow < 0 ||
              nextColumn < 0 ||
              nextRow >= grid.length ||
              nextColumn >= grid[0].length
            ) {
              continue;
            }
            if (grid[nextRow][nextColumn] === "1") {
              queue.push([nextRow, nextColumn]);
              grid[nextRow][nextColumn] = "0";
            }
          }
        }
      }
    }
  }

  return countLands;
};

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);
