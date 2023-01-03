let numCourses = 4,
  prerequisites = [
    [0, 1],
    [3, 1],
    [1, 3],
    [3, 2],
  ];
//   0 -> 1 -> 0
//  0 : [1]
//  1 : [0]
const canFinish = (numCourses, prerequisites) => {
  if (!prerequisites.length) {
    return true;
  }
  const adjList = new Array(numCourses).fill(0).map(() => []);
  for (let i = 0; i < prerequisites.length; i++) {
    const [p1, p2] = prerequisites[i];
    adjList[p1].push(p2);
  }
  for (let v = 0; v < numCourses; v++) {
    const queue = [];
    const seen = {};
    for (let i = 0; i < adjList[v].length; i++) {
      queue.push(adjList[v][i]);
    }
    while (queue.length) {
      const currentValue = queue.shift();
      seen[currentValue] = true;
      if (currentValue === v) {
        return false;
      }
      for (let i = 0; i < adjList[currentValue].length; i++) {
        if (!seen.hasOwnProperty(adjList[currentValue][i])) {
          queue.push(adjList[currentValue][i]);
        }
      }
    }
  }
  return true;
};

console.log(canFinish(numCourses, prerequisites));
