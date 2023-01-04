let numCourses = 6,
  prerequisites = [
    [1, 0],
    [2, 1],
    [2, 5],
    [0, 3],
    [4, 3],
    [3, 5],
    [4, 5],
  ];
//   0 -> 1 -> 0
//  0 : [1]
//  1 : [0]
// const canFinish = (numCourses, prerequisites) => {
//   if (!prerequisites.length) {
//     return true;
//   }
//   const adjList = new Array(numCourses).fill(0).map(() => []);
//   for (let i = 0; i < prerequisites.length; i++) {
//     const [p1, p2] = prerequisites[i];
//     adjList[p1].push(p2);
//   }
//   for (let v = 0; v < numCourses; v++) {
//     const queue = [];
//     const seen = {};
//     for (let i = 0; i < adjList[v].length; i++) {
//       queue.push(adjList[v][i]);
//     }
//     while (queue.length) {
//       const currentValue = queue.shift();
//       seen[currentValue] = true;
//       if (currentValue === v) {
//         return false;
//       }
//       for (let i = 0; i < adjList[currentValue].length; i++) {
//         if (!seen.hasOwnProperty(adjList[currentValue][i])) {
//           queue.push(adjList[currentValue][i]);
//         }
//       }
//     }
//   }
//   return true;
// };

// inDegree -> is linked
// adjList -> link to

// typological sort

const canFinish = (numCourses, prerequisites) => {
  const inDegree = new Array(numCourses).fill(0);
  const adjList = new Array(numCourses).fill(0).map(() => []);
  for (let i = 0; i < prerequisites.length; i++) {
    const [p1, p2] = prerequisites[i];
    inDegree[p1]++;
    adjList[p2].push(p1);
  }
  const stack = [];
  let count = 0;
  for (let i = 0; i < inDegree.length; i++) {
    const element = inDegree[i];
    element === 0 && stack.push(i);
  }
  while (stack.length) {
    const current = stack.pop();
    count++;
    let adjacent = adjList[current];
    for (let i = 0; i < adjacent.length; i++) {
      const element = adjacent[i];
      inDegree[element]--;
      if (inDegree[element] === 0) {
        stack.push(element);
      }
    }
  }
  return count === numCourses;
};

console.log(canFinish(numCourses, prerequisites));
