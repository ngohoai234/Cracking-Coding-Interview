const adjacencyList = [
  [1, 3],
  [0],
  [3, 8],
  [0, 2, 4, 5],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2],
];

const traversalBFS = (graph) => {
  if (!Array.isArray(graph) || !graph.length) {
    return;
  }
  debugger;
  const seen = new Map();
  const queue = [0];
  const values = [];

  while (queue.length) {
    const vertex = queue.shift();

    values.push(vertex);
    seen.set(vertex, true);

    const connections = graph[vertex];
    for (let i = 0; i < connections.length; i++) {
      const connection = connections[i];
      if (!seen.has(connection)) {
        queue.push(connection);
      }
    }
  }

  return values;
};

const traverseDFS = (vertex, graph, values, seen) => {
  values.push(vertex);
  seen.set(vertex, true);
  const connections = graph[vertex];
  for (let i = 0; i < connections.length; i++) {
    const connection = connections[i];

    if (!seen.has(connection)) {
      traverseDFS(connection, graph, values, seen);
    }
  }
};

const headId = 2;

const n = 6;

const managers = [2, 2, -1, 2, 2, 2];

const informTime = [0, 0, 1, 0, 0, 0];

const dfs = (currentId, adjList, informTime) => {
  if (adjList[currentId].length === 0) {
    return 0;
  }

  let max = 0;
  const subOrdinate = adjList[currentId];

  for (let i = 0; i < subOrdinate.length; i++) {
    max = Math.max(max, dfs(subOrdinate[i], adjList, informTime));
  }
  return max + informTime[currentId];
};

const numberOfMinutes = (n, headId, managers, informTime) => {
  const adjList = managers.map(() => []);

  for (let i = 0; i < n; i++) {
    const manager = managers[i];

    if (manager === -1) {
      continue;
    }

    adjList[manager].push(i);
  }

  return dfs(headId, adjList, informTime);
};

const canFinish = (numCourses, prerequisites) => {
  const adjList = new Array(numCourses).fill(0).map((item) => []);

  for (let i = 0; i < prerequisites.length; i++) {
    const pair = prerequisites[i];
    adjList[pair[1]].push(pair[0]);
  }

  for (let v = 0; v < numCourses; v++) {
    const queue = [];
    const seen = new Map();

    for (let i = 0; i < adjList[v].length; i++) {
      const vertex = adjList[v][i];
      queue.push(vertex);
    }

    while (queue.length) {
      const vertex = queue.shift();
      seen.set(vertex, true);

      if (vertex === v) {
        return false;
      }
      const adjacent = adjList[vertex];

      for (let i = 0; i < adjacent.length; i++) {
        if (!seen.has(adjacent[i])) {
          queue.push(adjacent[i]);
        }
      }
    }
  }
  return true;
};

// idea : typologicalSort
const canFinishSmarterVersion = (numCourses, prerequisites) => {
  if (!prerequisites.length) {
    return true;
  }

  const inDegree = new Array(numCourses).fill(0);

  const adjacencyList = inDegree.map((item) => []);

  for (let i = 0; i < prerequisites.length; i++) {
    const pair = prerequisites[i];

    inDegree[pair[0]]++;

    adjacencyList[pair[1]].push(pair[0]);
  }

  const stack = [];

  for (let i = 0; i < inDegree.length; i++) {
    if (!inDegree[i]) {
      stack.push(i);
    }
  }

  let count = 0;
  while (stack.length) {
    const vertex = stack.pop();
    count++;

    const notDoneCourses = adjacencyList[vertex];

    for (let i = 0; i < notDoneCourses.length; i++) {
      const next = notDoneCourses[i];
      inDegree[next]--;

      if (!inDegree[next]) {
        stack.push(next);
      }
    }
  }
  return count === numCourses;
};
