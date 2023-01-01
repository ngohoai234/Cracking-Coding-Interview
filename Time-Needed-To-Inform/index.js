let n = 6,
  headID = 2,
  manager = [2, 2, -1, 2, 2, 2],
  informTime = [0, 0, 1, 0, 0, 0];

const dfs = (currentHead, adjList, informTime) => {
  if (!adjList[currentHead].length) {
    return 0;
  }
  const subHead = adjList[currentHead];
  let max = 0;

  for (let i = 0; i < subHead.length; i++) {
    max = Math.max(max, dfs(subHead[i], adjList, informTime));
  }

  return max + informTime[currentHead];
};

const numOfMinutes = (n, headID, manager, informTime) => {
  const adjList = manager.map((i) => []);

  for (let e = 0; e < n; e++) {
    if (manager[e] === -1) {
      continue;
    }
    adjList[manager[e]].push(e);
  }
  return dfs(headID, adjList, informTime);
};
