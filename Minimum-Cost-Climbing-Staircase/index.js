const minCost = (n, cost, dp) => {
  if (n < 0) {
    return 0;
  }
  if (n === 0 || n === 1) {
    return cost[n];
  }
  if (dp[n] !== undefined) {
    return dp[n];
  }
  dp[n] =
    cost[n] + Math.min(minCost(n - 1, cost, dp), minCost(n - 2, cost, dp));
  return dp[n];
};
const minClimbingStairs = (cost) => {
  const length = cost.length;
  const dp = [];

  return Math.min(minCost(length - 1, cost, dp), minCost(length - 2, cost, dp));
};

console.log(minClimbingStairs([10, 15, 20, 30]));
